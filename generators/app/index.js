const Generator = require('yeoman-generator');
const kebabCase = require('lodash.kebabcase');
const merge = require('lodash.merge');

module.exports = class extends Generator {
  async prompting() {
    this.dependencies = [];
    this.devDependencies = [
      '@hesto2/config',
      'husky',
      'prettier',
      'pretty-quick',
    ];

    this.packageJsonScripts = {};
    this.answers = await this.prompt([
      {
        name: 'projectName',
        message: 'What do you want to name the project?',
        default: this.appname.replace(/\s/g, '-'),
        filter: (x) => kebabCase(x).toLowerCase(),
      },
      {
        name: 'customerName',
        message: 'Which customer is this for?',
        default: 'hesto2',
      },
      {
        name: 'description',
        message: `What's the project description?`,
        type: 'input',
      },
      {
        name: 'appType',
        message: 'What type of app are you making?',
        type: 'list',
        choices: ['typescript', 'react'],
      },
      {
        name: 'useTerraform',
        message: 'Use terraform?',
        type: 'confirm',
      },
    ]);
  }

  writing() {
    const mv = (from, to) => {
      this.fs.move(this.destinationPath(from), this.destinationPath(to));
    };
    console.log(this.templatePath());

    this.fs.copyTpl(
      [`${this.templatePath()}/**`],
      this.destinationPath(),
      this.answers
    );

    mv('gitignore', '.gitignore');
    mv('gitattributes', '.gitattributes');
    mv('_package.json', 'package.json');
  }

  async composedGenerators() {
    await this.composeWith(
      require.resolve('generator-hesto2/generators/ci'),
      this.answers
    );

    await this.composeWith(
      require.resolve('generator-hesto2/generators/typescript'),
      this.answers
    );

    if (this.answers.appType === 'react') {
      const reactGenerator = await this.composeWith(
        require.resolve('generator-hesto2/generators/react', {}, true),
        this.answers
      );
    }

    if (this.answers.useTerraform) {
      await this.composeWith(
        require.resolve('generator-hesto2/generators/terraform'),
        this.answers
      );
    }
  }

  install() {
    // this.spawnCommand('git', ['init']);
    this.yarnInstall(this.dependencies);
    this.yarnInstall(this.devDependencies, { dev: true });
  }
};
