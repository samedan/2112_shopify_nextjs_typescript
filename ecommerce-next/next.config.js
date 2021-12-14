const { withFrameworkConfig } = require("./framework/common/config");

// merges the {} of the default config on the root with ./framework/common one
module.exports = withFrameworkConfig({
  reactStrictMode: true,
  framework: {
    name: "shopify",
  },
  i18n: {
    locales: ["en-US", "es"],
    defaultLocale: "en-US",
  },
});

console.log("next.config.js", JSON.stringify(module.exports, null, 2));
