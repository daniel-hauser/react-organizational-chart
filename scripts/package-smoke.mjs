import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const workspace = resolve('.package-smoke');
const run = (command, args, cwd = process.cwd()) =>
  execFileSync(command, args, { cwd, stdio: 'pipe', encoding: 'utf8' });
const runNpm = (args, cwd) =>
  run(process.execPath, [process.env.npm_execpath, ...args], cwd);

const consumer = `
import * as React from 'react';
import { Tree, TreeNode, type TreeProps, type TreeNodeProps } from 'react-organizational-chart';
const leaf: TreeNodeProps = { label: React.createElement('span', null, 'Child'), className: 'custom' };
const props: TreeProps = { label: 'Root', children: React.createElement(TreeNode, leaf), lineStyle: 'dotted' };
export const tree = React.createElement(Tree, props);
// @ts-expect-error labels remain required
const invalid: TreeNodeProps = {};
`;

async function checkBrowser(cwd) {
  const { chromium } = await import('@playwright/test');
  const browser = await chromium.launch();
  try {
    const artifacts = resolve('test-results/package');
    await mkdir(artifacts, { recursive: true });
    const render = async (bundle, name) => {
      const page = await browser.newPage({
        viewport: { width: 900, height: 600 },
      });
      const errors = [];
      page.on('pageerror', (error) => errors.push(error.message));
      await page.setContent('<div id="root"></div>');
      await page.addScriptTag({
        path: resolve(cwd, 'node_modules/react/umd/react.development.js'),
      });
      await page.addScriptTag({
        path: resolve(
          cwd,
          'node_modules/react-dom/umd/react-dom.development.js',
        ),
      });
      await page.addScriptTag({
        content: 'window.react = window.React;',
      });
      if (name === 'umd-baseline') {
        // The old microbundle output leaked NODE_ENV into its browser bundle.
        await page.addScriptTag({
          content: 'window.process = { env: { NODE_ENV: "production" } };',
        });
      }
      await page.addScriptTag({ path: bundle });
      await page.evaluate(() => {
        const { Tree, TreeNode } = window.reactOrganizationalChart;
        const h = window.React.createElement;
        const label = (text) =>
          h(
            'div',
            {
              style: {
                display: 'inline-block',
                border: '1px solid red',
                padding: '5px',
              },
            },
            text,
          );
        window.ReactDOM.render(
          h(
            Tree,
            { label: label('Root') },
            h(TreeNode, { label: label('Short') }),
            h(
              TreeNode,
              { label: label('A wider parent label') },
              h(TreeNode, { label: label('Nested left') }),
              h(TreeNode, { label: label('Nested right') }),
            ),
            h(TreeNode, { label: label('Last') }),
          ),
          document.getElementById('root'),
        );
      });
      assert.deepEqual(errors, []);
      const root = page.locator('#root > ul');
      assert.equal(await root.locator('li').count(), 6);
      const geometry = await root.evaluate((tree) =>
        Array.from(tree.querySelectorAll('li, ul, li > div'), (element) => {
          const { x, y, width, height } = element.getBoundingClientRect();
          return { x, y, width, height };
        }),
      );
      const screenshot = await root.screenshot({
        path: resolve(artifacts, `${name}.png`),
      });
      await page.close();
      return { geometry, screenshot };
    };
    const current = await render(
      resolve(cwd, 'node_modules/react-organizational-chart/dist/index.umd.js'),
      'umd-current',
    );
    if (process.env.BASELINE_UMD) {
      const baseline = await render(
        resolve(process.env.BASELINE_UMD),
        'umd-baseline',
      );
      assert.deepEqual(
        current.geometry,
        baseline.geometry,
        'UMD layout changed from baseline',
      );
      assert(
        current.screenshot.equals(baseline.screenshot),
        'UMD pixels changed from baseline',
      );
      console.log(
        'UMD baseline comparison: identical geometry and screenshot pixels.',
      );
    }
    console.log('Packed UMD: React 16.12 browser rendering passed.');
  } finally {
    await browser.close();
  }
}

try {
  assert(
    process.env.npm_execpath,
    'Run the package smoke check through npm run test:package.',
  );
  const sourceManifest = JSON.parse(await readFile('package.json', 'utf8'));
  await rm(workspace, { recursive: true, force: true });
  await mkdir(workspace);
  const [{ filename, files }] = JSON.parse(
    runNpm([
      'pack',
      '--ignore-scripts',
      '--json',
      '--pack-destination',
      workspace,
    ]),
  );
  const paths = files.map(({ path }) => path);
  for (const entry of [
    'index.js',
    'index.module.js',
    'index.module.mjs',
    'index.umd.js',
    'index.d.ts',
    'index.d.mts',
  ]) {
    assert(paths.includes(`dist/${entry}`), `Packed entry missing: ${entry}`);
  }
  assert(
    !paths.some(
      (path) => path.startsWith('src/') || path.startsWith('scripts/'),
    ),
  );
  for (const [name, react, reactTypes, domTypes] of [
    ['legacy', '16.12.0', '16.9.23', '16.9.25'],
    ['current', '19.3.1', '19.3.0', '19.3.0'],
  ]) {
    const cwd = resolve(workspace, name);
    await mkdir(cwd);
    await writeFile(
      resolve(cwd, 'package.json'),
      JSON.stringify({ name: `smoke-${name}`, private: true, type: 'module' }),
    );
    runNpm(
      [
        'install',
        '--ignore-scripts',
        '--no-audit',
        '--no-fund',
        '--no-package-lock',
        resolve(workspace, filename),
        `react@${react}`,
        `react-dom@${react}`,
        `@types/react@${reactTypes}`,
        `@types/react-dom@${domTypes}`,
      ],
      cwd,
    );
    for (const extension of ['mts', 'cts']) {
      await writeFile(resolve(cwd, `consumer.${extension}`), consumer);
    }
    await writeFile(
      resolve(cwd, 'tsconfig.json'),
      JSON.stringify({
        compilerOptions: {
          strict: true,
          noEmit: true,
          module: 'NodeNext',
          moduleResolution: 'NodeNext',
          target: 'ES2018',
          lib: ['ES2022', 'DOM'],
          types: ['react', 'react-dom'],
          esModuleInterop: false,
          ignoreDeprecations: '6.0',
        },
        include: ['consumer.mts', 'consumer.cts'],
      }),
    );
    run(process.execPath, [
      resolve('node_modules/typescript/bin/tsc'),
      '-p',
      cwd,
    ]);
    const runtime = `
      import assert from 'node:assert/strict';
      import { createRequire } from 'node:module';
      import React from 'react';
      import * as esm from 'react-organizational-chart';
      const require = createRequire(import.meta.url);
      const { renderToStaticMarkup } = require('react-dom/server');
      const cjs = require('react-organizational-chart');
      const direct = require('react-organizational-chart/dist/index.js');
      for (const api of [esm, cjs, direct]) {
        const html = renderToStaticMarkup(React.createElement(api.Tree, { label: 'Root' },
          React.createElement(api.TreeNode, { label: 'Child' })));
        assert.match(html, /Root/);
        assert.match(html, /Child/);
        assert.equal((html.match(/<li/g) || []).length, 2);
      }
      const metadata = require('react-organizational-chart/package.json');
      assert.equal(metadata.main, 'dist/index.js');
    `;
    await writeFile(resolve(cwd, 'runtime.mjs'), runtime);
    run(process.execPath, ['runtime.mjs'], cwd);
    const manifest = JSON.parse(
      await readFile(
        resolve(cwd, 'node_modules/react-organizational-chart/package.json'),
      ),
    );
    assert.equal(manifest.version, sourceManifest.version);
    assert.deepEqual(
      manifest.peerDependencies,
      sourceManifest.peerDependencies,
    );
    console.log(
      `Packed ${name} consumer: React ${react}, CJS/ESM runtime and declarations passed.`,
    );
    if (name === 'legacy' && process.argv.includes('--browser')) {
      await checkBrowser(cwd);
    }
  }
} catch (error) {
  console.error(error.stdout || error.message);
  console.error(error.stderr || '');
  process.exitCode = 1;
} finally {
  await rm(workspace, { recursive: true, force: true });
}
