const path = require('path');

module.exports = {
  stories: [
    '../src/stories/**/*.story.js',
  ],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links'
  ]
};
