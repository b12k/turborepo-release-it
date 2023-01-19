const { existsSync, writeFileSync, mkdirSync } = require('node:fs');
const { dirname } = require('node:path');

const getTagName = (name) => [name, '-v${version}'].join('');

const getReleaseName = (name) => ['Release:', name, 'v${version}'].join(' ');

const getCommitMessage = (name) => ['ci: release', name, 'v${version}'].join(' ');


const createFileIfNotExist = (filePath, data) => {
  if (existsSync(filePath)) return;
  mkdirSync(dirname(filePath), { recursive: true });
  writeFileSync(filePath, data ? JSON.stringify(data, null, 2) : '');
};

module.exports = {
  getTagName,
  getReleaseName,
  getCommitMessage,
  createFileIfNotExist,
};
