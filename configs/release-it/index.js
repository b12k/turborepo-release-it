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
  },
  github: {
    releaseName: ['Release:', packageName, 'v${version}'].join(' '),
    // release: true,
  },
  git: {
    tagName: [packageName, '-v${version}'].join(''),
    // push: true,
    commit: true,
    commitMessage: ['ci(release):', packageName, 'released version ${version}'].join(' '),
    requireCleanWorkingDir: true,
    addUntrackedFiles: true,
  },
  // hooks: {
  //   'after:bump': [
  //     `git config user.name "${process.env.GIT_USER_NAME}"`,
  //     `git config user.email "${process.env.GIT_USER_EMAIL}"`,
  //   ],
  // },
};
