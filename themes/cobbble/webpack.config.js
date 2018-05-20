const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  entry: {
    index: './src/js/page/index.js',
    blog_list: './src/js/page/blog/list.js',
    blog_single: './src/js/page/blog/single.js',
    portfolio_list: './src/js/page/portfolio/list.js',
    portfolio_single: './src/js/page/portfolio/single.js'
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'static'),
    publicPath: '/',
    chunkFilename: 'js/[id].chunk.js'
  },
  module: {
    rules: [
      {
        test: /\.less/,
        use: [
          MiniCssExtractPlugin.loader,
          // "style-loader",
          'css-loader',
          'less-loader',
        ],
      },
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)/,
        use: {
          loader: 'url-loader',
          options: {
            outputPath: 'image/', // 图片输出的路径
            limit: 5 * 1024
          }
        }
      },
      {
        test:/\.(html|htm)$/,
        use:'html-withimg-loader'
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: '../layouts/index.html',
      template: './src/page/index.html',
      inject: true,
      hash: true,
      chunks: ['index'],
      minify: {
        removeComments: true,
        collapseWhitespace: false
      }
    }),
    new HtmlWebpackPlugin({
      filename: '../layouts/blog/list.html',
      template: './src/page/blog/list.html',
      inject: true,
      hash: true,
      chunks: ['blog_list'],
      minify: {
        removeComments: true,
        collapseWhitespace: false
      }
    }),
    new HtmlWebpackPlugin({
      filename: '../layouts/blog/single.html',
      template: './src/page/blog/single.html',
      inject: true,
      hash: true,
      chunks: ['blog_single']
    }),
    new HtmlWebpackPlugin({
      filename: '../layouts/portfolio/list.html',
      template: './src/page/portfolio/list.html',
      inject: true,
      hash: true,
      chunks: ['portfolio_list'],
      minify: {
        removeComments: true,
        collapseWhitespace: false
      }
    }),
    new HtmlWebpackPlugin({
      filename: '../layouts/portfolio/single.html',
      template: './src/page/portfolio/single.html',
      inject: true,
      hash: true,
      chunks: ['portfolio_single']
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "./css/[name].css",
      chunkFilename: "[id].css"
    }),
  ],
  optimization: {
    minimize: true
  },
  devServer: {
    contentBase: './',
    host: 'localhost',
    port: 9090, //默认8080
    inline: true, //可以监控js变化
    hot: true, //热启动
  }

};

module.exports = config;
