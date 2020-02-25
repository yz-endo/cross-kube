'use strict';

module.exports = {
  plugins: ['typescript'],

  modify: (config, env) => {
    // This is required to import cross-kube as ES module
    // https://github.com/jaredpalmer/razzle/issues/842
    delete config.externals;

    // For debugging
    // config.mode = 'development'
    // if (config.optimization) {
    //   config.optimization.minimize = false;
    // }

    return config;
  }
};
