// const { tagName, releaseName, versionFile, changelogFile, commitMessage } = require('./computed');

console.log(process.env.npm_package_name);

const config = {
  plugins: {
    '@release-it/conventional-changelog': {
      // infile: changelogFile,
      preset: {
        name: 'conventionalcommits',
      },
      path: '.',
      gitRawCommitsOpts: {
        path: '.',
      },
    },
    // '@release-it/bumper': {
    //   in: versionFile,
    //   out: versionFile,
    // },
  },
  npm: false,
  github: {
    releaseName: ['Release:', process.env.npm_package_name, 'v${version}'].join(' '),
    release: true,
  },
  git: {
    tagName: [process.env.npm_package_name, '-v${version}'].join(''),
    // commitMessage,
    push: false,
    // commitArgs: ['--no-verify'],
    // requireUpstream: false,
    // addUntrackedFiles: true,
    // requireCleanWorkingDir: false,
  },
  // hooks: {
  //   'after:bump': [
  //     'git checkout -- package.json'
  //   ],
  //   'before:release': [
  //     'git add --all',
  //   ],
  // },
};

module.exports = config;
