const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Stencil = require('@stencil/webpack');

module.exports = function webpackConfig() {
  return {
    mode: 'production',
    entry: path.join(__dirname, 'src/index.js'),
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src/index.html')
      }),
      new Stencil.StencilPlugin()
    ]
  };
};
