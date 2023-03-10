const packageName = process.env.npm_package_name;

module.exports = {
  plugins: {
    '@release-it/conventional-changelog': {
      preset: 'conventionalcommits',
      path: '.',
      gitRawCommitsOpts: {
        path: '.',
      },
    },
  },
  npm: {
    publish: false,
    versionArgs: ['--workspaces false']
  },
  github: {
    releaseName: ['Release:', packageName, 'v${version}'].join(' '),
    // release: true,
  },
  git: {
    tagName: [packageName, '-v${version}'].join(''),
    // push: true,
    commit: true,
    commitMessage: [`ci(${packageName.replace('@', '')}): released version`, '${version}'].join(' '),
  },
  hooks: {
    'before:git:release': [
      'mvm-update --verbose',
      'git add --all'
    ]
  },
};
