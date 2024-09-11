const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin'); // For minifying JS

const config = {
  entry: {
    main:[
   
    "./src/js/custom.js",
    "./src/js/jquery.min.js",
    "./src/css/bootstrap.min.css",
    "./src/css/custom.css"
  ],
  },
  output: {
    path: path.resolve(__dirname, "assets"),
    filename: "main.min.js",
    clean : true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader' 
        ]
      },
      
    ]
  },
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.css',
      '.js'
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css', // Output CSS file name
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(), // Minify JS
      new CssMinimizerPlugin(), // Minify CSS
    ],
  },
  mode: 'production' 
};

module.exports =  config;