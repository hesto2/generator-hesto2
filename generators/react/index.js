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
  async prompting() {
    this.answers = await this.prompt([
      {
        name: 'useStaticLambda',
        message: 'Do you want to serve this app with a lambda function?',
        type: 'confirm',
        default: true,
      },
    ]);
  }

  async composedGenerators() {
    if (this.answers.useStaticLambda) {
      await this.composeWith(
        require.resolve('generator-hesto2/generators/static-lambda'),
        this.options
      );
    }
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
