// Emit compact use_figma patch body (no header comment)
import fs from 'node:fs';
import path from 'node:path';

const src = fs.readFileSync(
  path.join(import.meta.dirname, 'figma-use-interaction-matrix.js'),
  'utf8',
);
const body = src.replace(/^\/\/[^\n]+\n/, '');
const marker = "/** `rebuild` 重生整表";
const patchOnly = body.replace(
  /const RUN_MODE = 'rebuild';/,
  "const RUN_MODE = 'patch';",
);
if (!patchOnly.includes(marker)) {
  console.error('RUN_MODE block missing');
  process.exit(1);
}
process.stdout.write(patchOnly);