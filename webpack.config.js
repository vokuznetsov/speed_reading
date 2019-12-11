const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    publicPath: path.resolve(__dirname, "/dist/"),
    // publicPath: '/dist/',
    contentBase: path.resolve(__dirname, "dist"),
    // contentBase: 'src/view',
    watchContentBase: true,
    compress: true,
    port: 9001
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: "./src/view/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order)
    })
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: 'style-loader', // inject CSS to page
            // loader: MiniCssExtractPlugin.loader, // for production mode
          },
          'css-loader', // translates CSS into CommonJS modules
          {
            loader: 'postcss-loader', // Run post css actions
            options: {
              plugins: function () { // post css plugins, can be exported to postcss.config.js
                return [
                  require('precss'),
                  require('autoprefixer')
                ];
              }
            }
          },
          'sass-loader', // compiles Sass to CSS
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader?name=static/[name].[ext]',
        ],
      }
    ]
  }
};