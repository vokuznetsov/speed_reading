const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  mode: "development",
  devtool: 'inline-source-map',
  devServer: {
    publicPath: '/dist/',
    //contentBase: path.resolve(__dirname, "views"),
    contentBase: 'views',
    watchContentBase: true,
    compress: true,
    port: 9001
  },
  plugins: [
    new CleanWebpackPlugin(),
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
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
        ],
      },
    ]
  }
};