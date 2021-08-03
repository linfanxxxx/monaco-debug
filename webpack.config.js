const MonacoEditorWebpackPlugin = require("monaco-editor-webpack-plugin");
const webpack = require("webpack");

module.exports = (config, options) => {
  console.log("webpack.config");
  config.plugins.push(
    new MonacoEditorWebpackPlugin({
      languages: ['javascript', 'typescript', "css", "html", "json", "yaml"],
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
