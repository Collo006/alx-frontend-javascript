
/*const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: "./task_1/js/main.ts",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        }
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  devServer: {
    contentBase: "./dist"
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Development"
    })
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};*/


const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./task_1/js/main.ts", // ✅ Adjusted to match your actual path
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"), // Output goes to /dist
  },
  resolve: {
    extensions: [".ts", ".js"], // So Webpack can import both TS and JS
  },
  module: {
    rules: [
      {
        test: /\.ts$/,           // Compile .ts files
        use: "ts-loader",
        exclude: /node_modules/, // Ignore libraries
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // Cleans /dist on each build
    new HtmlWebpackPlugin({
      template: "./task_1/index.html", // 📝 Create this if needed
      filename: "index.html",
    }),
  ],
  devtool: "source-map", // Enable source maps for debugging
  mode: "development",   // Change to 'production' for optimized build
};
