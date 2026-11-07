import { readFile, appendFile } from 'node:fs/promises';
import { gzipSync } from 'node:zlib';

const budgets = {
  'index.js': 3_000,
  'index.module.js': 3_000,
  'index.umd.js': 15_000,
};
const rows = [
  '| Bundle | Bytes | Gzip bytes | Gzip budget |',
  '| --- | ---: | ---: | ---: |',
];
let failed = false;
for (const [file, budget] of Object.entries(budgets)) {
  const contents = await readFile(`dist/${file}`);
  const size = gzipSync(contents).length;
  rows.push(`| ${file} | ${contents.length} | ${size} | ${budget} |`);
  failed ||= size > budget;
}
const report = `${rows.join('\n')}\n`;
console.log(report);
if (process.env.GITHUB_STEP_SUMMARY) {
  await appendFile(process.env.GITHUB_STEP_SUMMARY, report);
}
if (failed) throw new Error('A library bundle exceeds its gzip budget.');
