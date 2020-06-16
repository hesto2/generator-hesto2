const Generator = require('yeoman-generator');
const merge = require('lodash.merge');

module.exports = class extends Generator {
  addDependencies() {
    this.dependencies = [
      'react',
      'react-dom',
      'date-fns',
      '@material-ui/core',
      '@material-ui/icons',
      '@material-ui/styles',
      'axios',
      'axios-hooks',
      'clsx',
      'react-router',
      'react-router-dom',
      'react-scripts@3.4.0',
      'use-state-api-hooks',
    ];

    this.devDependencies = [
      '@types/jest',
      '@types/node',
      '@types/react',
      '@types/react-dom',
      '@types/react-router-dom',
    ];
  }
  async writing() {
    const variables = {
      ...this.options,
    };
    this.fs.copyTpl(
      [`${this.templatePath()}/**`],
      this.destinationPath(),
      variables
    );
  }

  async install() {
    this.yarnInstall(this.dependencies);
    this.yarnInstall(this.devDependencies, { dev: true });
  }
};
