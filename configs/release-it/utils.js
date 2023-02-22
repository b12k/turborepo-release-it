const { execSync } = require('node:child_process');
const { resolve } = require('node:path');
const glob = require('glob');

const repoRootPath = resolve(execSync('git rev-parse --show-toplevel').toString().trim());

console.Console
