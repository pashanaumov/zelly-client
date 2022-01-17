const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const { alias } = require('react-app-rewire-alias');

module.exports = function override(config, env) {
  config.resolve.plugins = config.resolve.plugins.filter((plugin) => !(plugin instanceof ModuleScopePlugin));
  config.resolve.symlinks = false;

  alias({
    '@core': 'core',
  })(config);

  return config;
};
