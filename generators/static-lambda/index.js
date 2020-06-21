const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  async prompting() {
    this.answers = await this.prompt([
      {
        name: 'projectDomainName',
        message: 'What do you want the domain name of the app to be?',
      },
    ]);
  }
  async writing() {
    const variables = {
      ...this.options,
      ...this.answers,
    };
    this.fs.copyTpl(
      [`${this.templatePath()}/**`],
      this.destinationPath(),
      variables
    );
  }
};
