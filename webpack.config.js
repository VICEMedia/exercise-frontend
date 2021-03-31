const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const mode = 'development';

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx']
  },
  mode,
  stats: {
    errorDetails: true
  },
  entry: './src/App.jsx',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                "targets": "defaults" 
              }],
              '@babel/preset-react'
            ],
            "plugins": [
              ["@babel/transform-runtime"]
            ]
          }
        }]
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    // compress: true,
    port: 8080,
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
};