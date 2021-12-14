const path = require("path");
const fs = require("fs");
const merge = require("deepmerge");
const prettier = require("prettier");

function withFrameworkConfig(defaultConfig = {}) {
  // CHANGE FRAMEWORK by Changing the config file
  // const framework = "shopify";
  // const framework = "bigcommerce";
  const framework = defaultConfig?.framework.name;
  // 'defaultConfig' comes from the root/next.config.js

  // path = "../shopify/next.config.js"
  const frameworkNextConfig = require(path.join(
    "../",
    framework,
    "next.config"
  ));

  const config = merge(defaultConfig, frameworkNextConfig);

  // cwd = Current Working Directory
  const tsPath = path.join(process.cwd(), "tsconfig.json");
  const tsConfig = require(tsPath);

  tsConfig.compilerOptions.paths["@framework"] = [`framework/${framework}`];
  tsConfig.compilerOptions.paths["@framework/*"] = [`framework/${framework}/*`];

  // writes the 'tsconfig.json' in the root folder
  fs.writeFileSync(
    tsPath,
    prettier.format(JSON.stringify(tsConfig), { parser: "json" })
  );

  return config;
}

module.exports = { withFrameworkConfig };
