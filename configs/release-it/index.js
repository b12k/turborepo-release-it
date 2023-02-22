const packageName = process.env.npm_package_name;

module.exports = {
  plugins: {
    '@release-it/conventional-changelog': {
      preset: {
        name: 'conventionalcommits',
      },
      path: '.',
      gitRawCommitsOpts: {
        path: '.',
      },
    },
  },
  npm: {
    publish: false,
    versionArgs: ['--workspaces false'],
  },
  github: {
    releaseName: ['Release:', packageName, 'v${version}'].join(' '),
    // release: true,
  },
  git: {
    tagName: [packageName, '-v${version}'].join(''),
    // push: true,
    commit: true,
    requireCommits: true,
    commitMessage: ['feat(release):', packageName, 'released version ${version}'].join(' '),
  },
  hooks: {
    'after:bump': [
      'mvm-update -v ${version}',
      'git add --all'
    ],
  },
};
