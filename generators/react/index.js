const Generator = require('yeoman-generator');
const merge = require('lodash.merge');

module.exports = class extends Generator {
  addDependencies() {
    this.scripts = {
      start: 'react-scripts start',
      build: 'react-scripts build',
      test: 'react-scripts test',
      deploy: '//TODO',
    };

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
      'typescript',
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

    const mv = (from, to) => {
      this.fs.move(this.destinationPath(from), this.destinationPath(to));
    };
  }

  async install() {
    this.yarnInstall(this.dependencies);
    this.yarnInstall(this.devDependencies, { dev: true });
  }
};
