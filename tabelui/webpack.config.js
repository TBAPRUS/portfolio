const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src') + '/index.tsx',
  mode: 'production',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    watchContentBase: true,
    progress: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [{ test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ }],
  },
};
