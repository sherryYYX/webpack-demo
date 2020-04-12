const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  entry: './src/index.js',
  output: {
    filename: 'index.[contentHash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
    title: 'My App',
    template: 'src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contentHash].css',
      chunkFilename: '[id].[contentHash].css',
      ignoreOrder: false,
    })
  ], 
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};


