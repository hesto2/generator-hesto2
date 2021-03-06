const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  writing() {
    this.fs.copyTpl(
      [`${this.templatePath()}/**`],
      this.destinationPath(),
      this.options
    );
  }
  install() {
    this.yarnInstall(['typescript', 'ts-node'], { dev: true });
  }
};
