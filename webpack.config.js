const MonacoEditorWebpackPlugin = require("monaco-editor-webpack-plugin");
const webpack = require("webpack");

module.exports = (config, options) => {
  console.log("webpack.config");


  Object.assign(config.resolve.alias, {
    'js-yaml$': require.resolve('./src/js-yaml.shim'),
    // https://github.com/webpack/webpack/issues/13413
    'original-js-yaml$': require.resolve(
      './node_modules/js-yaml/dist/js-yaml.mjs',
    ),
  });

  config.plugins.push(
    new MonacoEditorWebpackPlugin({
      languages: ['yaml'],
      globalAPI: true,
      customLanguages: [
        {
          label: "yaml",
          // TODO: restore once https://github.com/pengx17/monaco-yaml/pull/48 is merged
          entry: "../../monaco-yaml/lib/esm/monaco.contribution",
          worker: {
            id: "vs/language/yaml/yamlWorker",
            // TODO: restore once https://github.com/pengx17/monaco-yaml/pull/48 is merged
            entry: "../../monaco-yaml/lib/esm/yaml.worker.js",
          },
        },
      ],
    })
  );

  return config;
};
