const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: "development",
  devtool: 'inline-source-map',
  devServer: {
    publicPath: '/dist/',
    //contentBase: path.resolve(__dirname, "views"),
    contentBase: 'views',
    watchContentBase: true
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  }
};