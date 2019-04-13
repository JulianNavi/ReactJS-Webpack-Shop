const merge = require("webpack-merge");
const webpackbase = require("./webpack.config.base");

module.exports = merge.smart(webpackbase, {
  mode: "development",
  devServer: {
    port: 9000,
    historyApiFallback: true,
  },
});
