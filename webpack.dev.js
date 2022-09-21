const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlPartialsPageNames = require('./src/partials').htmlPartialsPageNames;
const singleCompPartialsPageNames =
  require('./src/partials/single-component').singleCompPartialsPageNames;

let multipleHtmlPlugins = htmlPartialsPageNames.map(name => {
  return new HtmlWebpackPlugin({
    template: path.join(__dirname, `./src/partials/${name}.html`),
    filename: `${name}.html`,
  });
});

let multipleSingleCompPlugins = singleCompPartialsPageNames.map(name => {
  return new HtmlWebpackPlugin({
    template: path.join(__dirname, `./src/partials/single-component/${name}.html`),
    filename: `singleComp-${name}.html`,
  });
});

module.exports = merge(common, {
  mode: 'development',

  devtool: 'source-map',

  devServer: {
    static: {
      directory: path.join(__dirname, './src'),
    },
    port: 3000,
  },

  module: {
    rules: [
      // SASS LOADER
      {
        test: /\.scss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            },
          },
        ],
      },
    ],
  },

  plugins: [
    // HTML
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
      filename: 'index.html',
      title: 'Development',
      lang: 'en',
    }),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/single-component.html'),
      filename: 'single-component.html',
      title: 'Development',
      lang: 'en',
    }),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/partials/skip-links.html'),
      filename: 'skip-links.html',
    }),

    ...multipleHtmlPlugins,
    ...multipleSingleCompPlugins,

    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/partials/footer.html'),
      filename: 'footer.html',
    }),
  ],
});
