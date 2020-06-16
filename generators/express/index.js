const Generator = require('yeoman-generator');
const merge = require('lodash.merge');

module.exports = class extends Generator {
  addDependencies() {
    this.dependencies = [
      '@hesto2/express-utils',
      'aws-sdk',
      'aws-serverless-express',
      'axios',
      'cors',
      'date-fns',
      'dotenv',
      'express',
      'form-data',
      'querystring',
    ];

    this.devDependencies = [
      '@types/aws-lambda',
      '@types/aws-serverless-express',
      '@types/express',
      '@types/jest',
      'cross-env',
      'eslint',
      'jest',
      'nodemon',
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
