const { composePlugins, withNx } = require('@nx/next');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    svgr: false,
  },
  webpack: config => {
    if (!config.resolve.plugins) {
      config.resolve.plugins = [];
    }

    config.resolve.plugins.push(
      new TsconfigPathsPlugin.default({
        configFile: path.resolve(__dirname, '../../tsconfig.base.json'),
      })
    );

    return config;
  },
};

const plugins = [withNx];

module.exports = composePlugins(...plugins)(nextConfig);
