const path = require('path');
const { merge } = require('webpack-merge');
const prod = require('./webpack.prod.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FR = require('./src/locales/fr.json');

module.exports = merge(prod, {
  output: {
    path: path.resolve(__dirname, 'dist/FR'),
  },

  plugins: [
    // HTML
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
      filename: 'index.html',
      title: FR.head.title,
      lang: 'fr',
    }),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/tab-panel.html'),
      filename: 'tab-panel.html',
      title: FR.head.title,
      lang: 'fr',
    }),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/accordeon.html'),
      filename: 'accordeon.html',
      title: FR.head.title,
      lang: 'fr',
    }),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/accordeon-2.html'),
      filename: 'accordeon-2.html',
      title: FR.head.title,
      lang: 'fr',
    }),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/slider.html'),
      filename: 'slider.html',
      title: FR.head.title,
      lang: 'fr',
    }),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/slider_v2.html'),
      filename: 'slider_v2.html',
      title: FR.head.title,
      lang: 'fr',
    }),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/blockquote.html'),
      filename: 'blockquote.html',
      title: FR.head.title,
      lang: 'fr',
    }),
  ],
});
