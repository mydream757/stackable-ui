const path = require('path');
const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    'storybook-css-modules-preset',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [
          require.resolve('@babel/preset-typescript'),
          require.resolve('@emotion/babel-preset-css-prop'),
        ],
      },
    });
    config.resolve.mainFields = ['browser', 'module', 'main'];
    config.resolve.modules = [...config.resolve.modules];
    config.resolve.extensions.push('.ts', '.tsx');
    config.resolve.alias = {
      ...config.resolve.alias,
      node_modules: path.resolve(__dirname, '../node_modules'),
      src: path.resolve(__dirname, '../src'),
      '@emotion/core': toPath('node_modules/@emotion/react'),
    };
    return config;
  },
};
