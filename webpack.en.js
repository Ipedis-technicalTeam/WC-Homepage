const path = require('path');
const { merge } = require('webpack-merge');
const prod = require('./webpack.prod.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const EN = require('./src/locales/en.json');

module.exports = merge(prod, {
  output: {
    path: path.resolve(__dirname, 'docs'),
  },

  plugins: [
    // HTML
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
      filename: 'index.html',
      title: EN.head.title,
      lang: 'en',
    }),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/tab-panel.html'),
      filename: 'tab-panel.html',
      title: EN.head.title,
      lang: 'en',
    }),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/accordeon.html'),
      filename: 'accordeon.html',
      title: EN.head.title,
      lang: 'en',
    }),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/slider.html'),
      filename: 'slider.html',
      title: EN.head.title,
      lang: 'en',
    }),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/slider_v2.html'),
      filename: 'slider_v2.html',
      title: EN.head.title,
      lang: 'en',
    }),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/blockquote.html'),
      filename: 'blockquote.html',
      title: EN.head.title,
      lang: 'en',
    }),
  ],
});
