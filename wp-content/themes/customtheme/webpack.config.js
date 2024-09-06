const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  entry: {
    main:[

    "./src/js/bootstrap.bundle.min.js",
    "./src/js/custom.js",
    "./src/js/jquery.min.js",
    "./src/js/owl-crowsel-smoth.js",
    "./src/js/owl.carousel.js"
  ]
  },
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: "custom-script.js",
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
    new MiniCssExtractPlugin()
  ]
};

module.exports =  config