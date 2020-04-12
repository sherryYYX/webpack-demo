const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  mode: 'production',
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
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'] 
      },
      {
        test: /\.styl$/,
        loader: ['style-loader', 'css-loader','stylus-loader']
      },
      {
        test: /\.less$/,
        loader: ['style-loader',
                'css-loader',
                'less-loader']
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          'css-loader',
        ],
        // use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation:  require('dart-sass')
            } 
          },
        ],
      },
    ],
  },
};


