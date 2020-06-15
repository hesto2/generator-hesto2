const addDependency = (context, name, isDev) => {
  if (!context.dependencies) {
    context.dependencies = [];
  }
  if (!context.devDependencies) {
    context.devDependencies = [];
  }

  if (isDev) {
    context.devDependencies.push(name);
  } else {
    context.dependencies.push(name);
  }
};

module.exports = addDependency;
