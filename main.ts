// news-image-20261121 entry (Node 22, standard library only): the image is the
// entry.png beside this file, and the program copies it to /output/entry.png.
// The gate takes a whole PNG of at most 1 MiB and 1024 by 1024 pixels, and the
// judge sees exactly the bytes copied.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { createHash } from 'node:crypto';
import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const MAX_BYTES = 1_048_576;

const source = new URL('./entry.png', import.meta.url);
const expected = readFileSync(source);

// Validate the committed image before copying: PNG magic bytes, a 1024x1024
// IHDR, and the 1 MiB size cap the gate enforces. A bad source image must
// fail here, not silently pass through to the judge.
if (expected.length > MAX_BYTES) {
  throw new Error(`entry.png is ${expected.length} bytes, over the 1 MiB gate limit`);
}
if (!expected.subarray(0, 8).equals(PNG_MAGIC)) {
  throw new Error('entry.png does not start with the PNG magic bytes');
}
const width = expected.readUInt32BE(16);
const height = expected.readUInt32BE(20);
if (width !== 1024 || height !== 1024) {
  throw new Error(`entry.png is ${width}x${height}, expected 1024x1024`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const dest = join(outDir, 'entry.png');
copyFileSync(source, dest);

// Re-read the written file and throw if the byte count or content differs
// from the committed image.
const written = readFileSync(dest);
if (written.length !== expected.length || !written.equals(expected)) {
  throw new Error('entry.png copy mismatch: written bytes differ from the committed image');
}

// The byte comparison above already proves the copy, but re-check the
// written file's magic bytes on its own and log a deterministic audit line
// (bytes, dimensions, sha256) so the run output proves what the judge got.
if (!written.subarray(0, 8).equals(PNG_MAGIC)) {
  throw new Error('written entry.png does not start with the PNG magic bytes');
}
const sha256 = createHash('sha256').update(written).digest('hex');
console.log(`entry.png: ${written.length} bytes, ${width}x${height}, sha256 ${sha256}`);
