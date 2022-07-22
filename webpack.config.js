const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "public"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "index.html"),
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "src"),
    },
    port: 4000,
  },
  module: {
    // exclude node_modules
    rules: [
        {
           test: /\.(js|jsx)$/,
           exclude: /node_modules/,
           use: ['babel-loader']
        },
        {
           test: /\.(s(a|c)ss)$/,
           use: ['style-loader','css-loader', 'sass-loader']
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },
      ],
  },
  // pass all js files through Babel
  resolve: {
    extensions: ["*", ".js", ".jsx"], 
  }
};