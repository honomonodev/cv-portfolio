// @ts-check

const { composePlugins, withNx } = require('@nx/next');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin').default;

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
      new TsconfigPathsPlugin({
        configFile: path.resolve(process.cwd(), 'tsconfig.base.json'),
      })
    );

    return config;
  },
};

const plugins = [withNx];

module.exports = composePlugins(...plugins)(nextConfig);
