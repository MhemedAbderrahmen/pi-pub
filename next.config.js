const withLess = require("next-with-less");

module.exports = withLess({
  // reactStrictMode: true,
  lessLoaderOptions: {},
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    localeDetection: false
  }
});