const path = require('path');
// const  {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: "development",
  //  plugins: [
  //    new CleanWebpackPlugin(),
  //  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  }
};