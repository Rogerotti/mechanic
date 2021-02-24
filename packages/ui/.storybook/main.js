const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.@(tsx|mdx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-knobs/register'],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
    }
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@assets": path.resolve(__dirname, "../public/"),
      "@core-components": path.resolve(__dirname, "../src/core-components/"),
    };
    return config;
  },
};