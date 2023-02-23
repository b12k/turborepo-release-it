const { execSync } = require('node:child_process');
const { resolve } = require('node:path');

const repoRootPath = resolve(execSync('git rev-parse --show-toplevel').toString().trim());

module.exports = {
  repoRootPath,
}
