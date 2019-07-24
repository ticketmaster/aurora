module.exports = {
  webpack: catalogWebpackConfig => ({
    ...catalogWebpackConfig,
    resolve: {
      ...catalogWebpackConfig.resolve,
      extensions: catalogWebpackConfig.resolve.extensions.concat(".tsx")
    },
    module: {
      ...catalogWebpackConfig.module,
      rules: catalogWebpackConfig.module.rules.map(
        addTypescriptExtensionsForBabelLoader
      )
    }
  })
};

function addTypescriptExtensionsForBabelLoader(rule) {
  if (rule.oneOf) {
    return {
      ...rule,
      oneOf: rule.oneOf.map(addTypescriptExtensionsForBabelLoader)
    };
  }

  if (/\bbabel-loader\b/.test(rule.loader || "")) {
    return { ...rule, test: /\.[jt]sx?$/ };
  }

  return rule;
}
