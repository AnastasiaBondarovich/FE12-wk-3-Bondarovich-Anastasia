const path = require("path");

module.exports = {
  "stories": [
    "../src/**/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@react-theming/storybook-addon'
  ],
  "webpackFinal": async (config, { configType }) => {
    config.resolve.modules = [
      '../src',
      '../node_modules',
    ];

    config.resolve.extensions = ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx'];

    return config;
  },
}
