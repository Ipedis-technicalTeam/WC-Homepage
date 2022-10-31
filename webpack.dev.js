const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlPartialsPageNames = require('./src/partials').htmlPartialsPageNames;
const tabPanelPartialsPageNames = require('./src/partials/tab-panel').tabPanelPartialsPageNames;
const accordeonPartialsPageNames = require('./src/partials/accordeon').accordeonPartialsPageNames;
const blockquotePartialsPageNames =
  require('./src/partials/blockquote').blockquotePartialsPageNames;

let multipleHtmlPlugins = htmlPartialsPageNames.map(name => {
  return new HtmlWebpackPlugin({
    template: path.join(__dirname, `./src/partials/${name}.html`),
    filename: `${name}.html`,
  });
});

let multipleTabPanelPlugins = tabPanelPartialsPageNames.map(name => {
  return new HtmlWebpackPlugin({
    template: path.join(__dirname, `./src/partials/tab-panel/${name}.html`),
    filename: `tabPanel-${name}.html`,
  });
});

let multipleAccordeonPlugins = accordeonPartialsPageNames.map(name => {
  return new HtmlWebpackPlugin({
    template: path.join(__dirname, `./src/partials/accordeon/${name}.html`),
    filename: `accordeon-${name}.html`,
  });
});

let multipleBlockquotePlugins = blockquotePartialsPageNames.map(name => {
  return new HtmlWebpackPlugin({
    template: path.join(__dirname, `./src/partials/blockquote/${name}.html`),
    filename: `blockquote-${name}.html`,
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
      template: path.join(__dirname, './src/tab-panel.html'),
      filename: 'tab-panel.html',
      title: 'Development',
      lang: 'en',
    }),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/accordeon.html'),
      filename: 'accordeon.html',
      title: 'Development',
      lang: 'en',
    }),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/blockquote.html'),
      filename: 'blockquote.html',
      title: 'Development',
      lang: 'en',
    }),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/partials/skip-links.html'),
      filename: 'skip-links.html',
    }),

    ...multipleHtmlPlugins,
    ...multipleTabPanelPlugins,
    ...multipleAccordeonPlugins,
    ...multipleBlockquotePlugins,
  ],
});
