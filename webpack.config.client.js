const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const StylelintPlugin = require("stylelint-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  name: "client",
  target: "web",
  entry: {
    client: path.resolve(__dirname, "src", "client", "main.tsx"),
  },
  output: {
    path: path.resolve(__dirname, "build", "static"),
    filename: "bundle.[contenthash].js"
  },
  resolve: {
    extensions: [ ".js", ".jsx" , ".ts", ".tsx" ],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        loader: "babel-loader"
      },
      {
        test: /\.(css|less)$/,
        use: [ MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "less-loader" ]
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new WebpackManifestPlugin({
      publicPath: ""
    }),
    new ESLintPlugin({
      extensions: [ "js", "jsx", "ts", "tsx" ]
    }),
    new StylelintPlugin({
      extensions: [ "css", "less" ]
    }),
    new MiniCssExtractPlugin({
      filename: "styles.[contenthash].css"
    }),
    new CopyPlugin({
      patterns: [{ from: "public", to: "." }]
    })
  ]
}