const path = require("path");
const merge = require("webpack-merge");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpackbase = require("./webpack.config.base");

module.exports = merge.smart(webpackbase, {
  output: {
    filename: "index.bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  mode: "production",
  plugins: [new CleanWebpackPlugin()],
});
