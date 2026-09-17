import { rmSync } from 'node:fs';
// Only generated, ignored output: prevents old flat HTML routes surviving a build.
rmSync(new URL('../out/', import.meta.url), { recursive: true, force: true });
