const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  async prompting() {
    this.ciAnswers = await this.prompt([
      {
        name: 'circleCIContext',
        message: 'CircleCI Context:',
        default: 'hesto2-aws',
      },
    ]);
  }
  writing() {
    this.fs.copyTpl(
      [`${this.templatePath()}/**`],
      this.destinationPath(),
      this.ciAnswers
    );

    this.fs.move(
      this.destinationPath('circleci/*'),
      this.destinationPath('.circleci')
    );
  }
};
