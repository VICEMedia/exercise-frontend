// const path = require('path');
// const nodeExternals = require('webpack-node-externals');

// module.exports = {
//   entry: './index.js',

//   target: 'node',

//   externals: [nodeExternals()],

//   output: {
//     path: path.resolve('server-build'),
//     filename: 'index.js'
//   },

//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         use: 'babel-loader'
//       }
//     ]
//   }
// };

const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

const mode = 'development';

module.exports = {
  // resolve: {
  //   fallback: {
  //     "fs": false,
  //     "net": false,
  //     "path": require.resolve("path-browserify"),
  //     "util": require.resolve("util/"),
  //     "stream": require.resolve("stream-browserify"),
  //     "buffer": require.resolve("buffer/"),
  //     "http": require.resolve("stream-http"),
  //     "crypto": require.resolve("crypto-browserify"),
  //     "zlib": require.resolve("browserify-zlib"),
  //     "assert": require.resolve("assert/"),
  //   }
  // },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  mode,
  // target: "node",
  // plugins: [
  //   new NodePolyfillPlugin(),
  // ],
  // plugins: [
    // new webpack.DefinePlugin({
    //     'process.env.NODE_ENV': `"${mode}"`
    // })
//     new webpack.ProvidePlugin({
//       process: 'process/browser',
//     }),
// ],
  // devtool: 'eval-cheap-module-source-map',
  stats: {
    errorDetails: true
  },
  // entry: {
  //   main: path.resolve(__dirname, 'src/App.js'),
  //   styles: path.resolve(__dirname, 'application.scss'),
  // },
  entry: './src/App.jsx',
  // entry: path.resolve(__dirname, 'src/App.js'),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        // include: path.resolve(__dirname, 'src'),
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
        // include: __dirname,
        exclude: /node_modules/,
        use: [
          // Creates `style` nodes from JS strings
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
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