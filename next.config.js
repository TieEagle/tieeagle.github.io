const withSass = require("@zeit/next-sass");
const withFonts = require("next-fonts");

// noinspection JSUnusedLocalSymbols
module.exports = withFonts(
  withSass({
    webpack(config, options) {
      return config;
    }
  })
);
