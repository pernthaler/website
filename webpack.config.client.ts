import path from "path";
import webpack from "webpack";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import { WebpackManifestPlugin } from "webpack-manifest-plugin";
import ESLintWebpackPlugin from "eslint-webpack-plugin";
import StylelintWebpackPlugin from "stylelint-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";

const config: webpack.Configuration = {
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
    new ESLintWebpackPlugin({
      extensions: [ "js", "jsx", "ts", "tsx" ]
    }),
    new StylelintWebpackPlugin({
      extensions: [ "css", "less" ]
    }),
    new MiniCssExtractPlugin({
      filename: "styles.[contenthash].css"
    }),
    new CopyWebpackPlugin({
      patterns: [{
        context: path.resolve(__dirname, "src", "client"), from: "public", to: "."
      }]
    })
  ]
}

export default config;