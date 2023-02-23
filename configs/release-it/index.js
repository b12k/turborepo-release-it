const { join } = require('node:path')
const { repoRootPath } = require('./utils')
const packageName = process.env.npm_package_name;

module.exports = {
  plugins: {
    '@release-it/conventional-changelog': {
      preset: {
        name: 'conventionalcommits',
      },
      infile: join(repoRootPath, `${packageName.split('/')[1]}.CHANGELOG.md`),
      path: '.',
      gitRawCommitsOpts: {
        path: '.',
      },
    },
  },
  npm: false,
  github: {
    releaseName: ['Release:', packageName, 'v${version}'].join(' '),
    // release: true,
  },
  git: {
    tagName: [packageName, '-v${version}'].join(''),
    // push: true,
    commit: true,
    requireCommits: true,
    commitArgs: ['--allow-empty'],
    commitMessage: ['feat(release):', packageName, 'released version ${version}'].join(' '),
  },
  hooks: {
    'before:git:release': [
      'mvm-update -v ${version}',
      'git add --all'
    ]
  },
};
