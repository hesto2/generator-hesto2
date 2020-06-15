const Generator = require('yeoman-generator');

const getDynamoTable = (customer) => {
  // I wish I standardized these sooner, but until I do this will have to do
  const tableNames = {
    hesto2: 'terraform-lock',
    bungeelink: 'bungeelink-server-terraform-lock',
    sqrd: 'terraform-state',
  };
  return tableNames[customer];
};

module.exports = class extends Generator {
  async writing() {
    const variables = {
      ...this.options,
      dynamoLockTable: getDynamoTable(this.options.customerName),
    };
    this.fs.copyTpl(
      [`${this.templatePath()}/**`],
      this.destinationPath(),
      variables
    );
  }
};
