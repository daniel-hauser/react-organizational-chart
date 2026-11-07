import { copyFile } from 'node:fs/promises';
import { defineConfig } from 'tsdown';

const common = {
  entry: ['src/index.tsx'],
  target: 'es2018' as const,
  minify: true,
  inputOptions: { transform: { jsx: 'react' as const } },
};

export default defineConfig([
  {
    ...common,
    platform: 'neutral',
    dts: true,
    format: ['esm', 'cjs'],
    hooks: {
      'build:done': async () => {
        // Preserve the historical bundler entry alongside native Node ESM.
        await copyFile('dist/index.mjs', 'dist/index.module.mjs');
        await copyFile('dist/index.mjs', 'dist/index.module.js');
      },
    },
  },
  {
    ...common,
    format: 'umd',
    dts: false,
    platform: 'browser',
    // Keep the standalone browser bundle: React is the only required global.
    deps: { alwaysBundle: [/^@emotion\//, 'stylis'], onlyBundle: false },
    outputOptions: {
      name: 'reactOrganizationalChart',
      globals: { react: 'react' },
      entryFileNames: 'index.umd.js',
    },
  },
]);
