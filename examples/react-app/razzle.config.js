'use strict';

module.exports = {
  plugins: ['typescript'],

  // This is required to import cross-kube as ES module
  // https://github.com/jaredpalmer/razzle/issues/842
  modify: (config, env) => {
    delete config.externals;
    return config;
  }
};
