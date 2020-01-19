const webpack =  require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: [
    'babel-polyfill',
    './src/index.js',
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    port: 8081,
    contentBase: './dist',
    overlay: {
      warnings: true,
      errors: true
    },
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [{
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      }, {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      }, {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          }, {
            loader: 'postcss-loader',
            options: { sourceMap: true, config: { path: `./postcss.config.js` } }
          }, {
            loader: 'sass-loader',
            options: { sourceMap: true }
          }
        ]
      }, {
        test: /\.css$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          }, {
            loader: 'postcss-loader',
            options: { sourceMap: true, config: { path: `./postcss.config.js` } }
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
    }),
    new HtmlWebpackPlugin({
      template: `src/index.html`,
      inject: true,
    }),
    new CopyPlugin([
      {from: 'src/static', to: 'static'},
      {from: 'src/data', to: 'data'},
    ]),
  ],
}