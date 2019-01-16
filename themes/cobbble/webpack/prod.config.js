const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const rootPath = path.join(__dirname, '../')

const config = {
  entry: {
    index: rootPath + 'src/js/page/index.js',
    blog_list: rootPath + 'src/js/page/blog/list.js',
    blog_single: rootPath + 'src/js/page/blog/single.js',
    portfolio_list: rootPath + 'src/js/page/portfolio/list.js',
    portfolio_single: rootPath + 'src/js/page/portfolio/single.js',
    gallery_list: rootPath + 'src/js/page/gallery/list.js',
    gallery_single: rootPath + 'src/js/page/gallery/single.js'
  },
  output: {
    filename: 'js/[name].[hash:8].js',
    path: path.resolve(rootPath, 'static'),
    publicPath: 'https://cdn.chelme.com/',
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
      filename: rootPath + 'layouts/index.html',
      template: rootPath + 'src/page/index.html',
      inject: true,
      hash: true,
      chunks: ['index'],
      minify: {
        removeComments: true,
        collapseWhitespace: false
      }
    }),
    new HtmlWebpackPlugin({
      filename: rootPath + 'layouts/blog/list.html',
      template: rootPath + 'src/page/blog/list.html',
      inject: true,
      hash: true,
      chunks: ['blog_list'],
      minify: {
        removeComments: true,
        collapseWhitespace: false
      }
    }),
    new HtmlWebpackPlugin({
      filename: rootPath + 'layouts/blog/single.html',
      template: rootPath + 'src/page/blog/single.html',
      inject: true,
      hash: true,
      chunks: ['blog_single']
    }),
    new HtmlWebpackPlugin({
      filename: rootPath + 'layouts/portfolio/list.html',
      template: rootPath + 'src/page/portfolio/list.html',
      inject: true,
      hash: true,
      chunks: ['portfolio_list'],
      minify: {
        removeComments: true,
        collapseWhitespace: false
      }
    }),
    new HtmlWebpackPlugin({
      filename: rootPath + 'layouts/portfolio/single.html',
      template: rootPath + 'src/page/portfolio/single.html',
      inject: true,
      hash: true,
      chunks: ['portfolio_single']
    }),
    new HtmlWebpackPlugin({
      filename: rootPath + 'layouts/gallery/list.html',
      template: rootPath + 'src/page/gallery/list.html',
      inject: true,
      hash: true,
      chunks: ['gallery_list'],
      minify: {
        removeComments: true,
        collapseWhitespace: false
      }
    }),
    new HtmlWebpackPlugin({
      filename: rootPath + 'layouts/gallery/single.html',
      template: rootPath + 'src/page/gallery/single.html',
      inject: true,
      hash: true,
      chunks: ['gallery_single']
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "css/[name].[hash:8].css",
      chunkFilename: "[id].css"
    }),
  ],
  optimization: {
    minimize: true
  },
  devServer: {
    contentBase: rootPath,
    host: 'localhost',
    port: 9090, //默认8080
    inline: true, //可以监控js变化
    hot: true, //热启动
  }

};

module.exports = config;
