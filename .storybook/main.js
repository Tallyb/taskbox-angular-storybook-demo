module.exports = {
  stories: [{
    'directory': '../src', files: '**/*.stories.@(js|jsx|ts|tsx)'
  }],
  core: {
    builder: {
      name: 'webpack5',
      options: { 
        lazyCompilation: false,
        fsCache: true
      }
    }
  },
  angularOptions: {
    enableIvy: true
  },
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
};
