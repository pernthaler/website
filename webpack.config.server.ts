import path from "path";
import webpack from "webpack";
import Plugin from "./src/server/plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import ESLintWebpackPlugin from "eslint-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import webpackNodeExternals from "webpack-node-externals";

const config: webpack.Configuration = {
  name: "server",
  target: "node",
  entry: {
    server: path.resolve(__dirname, "src", "server", "main.ts"),
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js",
  },
  resolve: {
    extensions: [ ".js", ".jsx" , ".ts", ".tsx" ],
  },
  externals: [ webpackNodeExternals() ],
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
        loader: "null-loader"
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        "**/*",
        "!static/**"
      ]
    }),
    new ESLintWebpackPlugin({
      extensions: [ "js", "jsx", "ts", "tsx" ]
    }),
    new CopyWebpackPlugin({
      patterns: [{ context: path.resolve(__dirname, "src", "server"), from: "views", to: "views" }]
    }),
    new Plugin()
  ]
};

export default config;