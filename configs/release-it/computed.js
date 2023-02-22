const { execSync } = require('node:child_process');
const { join, resolve } = require('node:path');

const { getTagName, getReleaseName, getCommitMessage, createFileIfNotExist } = require('./functions');

const srcPath = resolve(process.cwd());
const packageJsonPath = join(srcPath, 'package.json');
const { name, version } = require(packageJsonPath);

const versionFileName = `${name}.VERSION.json`;
const changelogFileName = `${name}.CHANGELOG.md`;

const repoRootPath = resolve(execSync('git rev-parse --show-toplevel').toString().trim());
const relativeRootPath = srcPath.replace(repoRootPath, '').slice(1).replaceAll('\\', '/');

const versionsFolderRelativePath = [
  ...relativeRootPath
    .split('/')
    .map(() => '..'),
  '.versions',
].join('/');

const versionFile = [versionsFolderRelativePath, versionFileName].join('/');
const changelogFile = [versionsFolderRelativePath, changelogFileName].join('/');

// createFileIfNotExist(versionFile, { version: version || '0.0.0' });
// createFileIfNotExist(changelogFile, '');

module.exports = {
  tagName: getTagName(name),
  releaseName: getReleaseName(name),
  commitMessage: getCommitMessage(name),
  versionFile,
  changelogFile,
};
