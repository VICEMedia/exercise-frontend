const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx']
  },
  mode,
  stats: {
    errorDetails: true,
  },
  entry: {
    app: './src/App.jsx',
  },
  output: {
    filename: '[name].min.js',
    path: path.join(__dirname, 'dist'),
    clean: true
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
    port: 8080,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].min.css",
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin(),
    ],
  },
};