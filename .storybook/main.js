const path = require('path');

module.exports = {
  stories: ['../src/storybook/**/*.story.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],

  webpackFinal: async (config) => {
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, '../src'),
    ];

    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@components': 'components',
      '@libs': 'libs',
      '@pages': 'pages',
      '@router': 'router',
      '@store': 'store',
      '@styles': 'styles',
      '@types': 'types',
    };

    return config;
  },
};
