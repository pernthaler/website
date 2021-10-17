const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const nodeExternals = require("webpack-node-externals");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  name: "server",
  target: "node",
  entry: {
    server: path.resolve(__dirname, "src", "server", "main.tsx"),
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js",
  },
  resolve: {
    extensions: [ ".js", ".jsx" , ".ts", ".tsx" ],
  },
  externals: [ nodeExternals() ],
  node: {
    __dirname: false
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        loader: "babel-loader"
      },
      {
        test: /\.(css|less)$/,
        use: [ "null-loader" ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ESLintPlugin({
      extensions: [ "js", "jsx", "ts", "tsx" ]
    }),
    new CopyPlugin({
      patterns: [{ context: "src/server", from: "views", to: "views" }]
    })
  ]
}