const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlPartialsPageNames = require('./src/partials').htmlPartialsPageNames;
const tabPanelPartialsPageNames = require('./src/partials/tab-panel').tabPanelPartialsPageNames;
const accordeonPartialsPageNames = require('./src/partials/accordeon').accordeonPartialsPageNames;
const accordeon2PartialsPageNames =
  require('./src/partials/accordeon-2').accordeon2PartialsPageNames;
const sliderPartialsPageNames = require('./src/partials/slider').sliderPartialsPageNames;
const sliderPartialsPageNames_v2 = require('./src/partials/slider_v2').sliderPartialsPageNames_v2;
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

let multipleAccordeon2Plugins = accordeon2PartialsPageNames.map(name => {
  return new HtmlWebpackPlugin({
    template: path.join(__dirname, `./src/partials/accordeon-2/${name}.html`),
    filename: `accordeon-2-${name}.html`,
  });
});

let multipleSliderPlugins = sliderPartialsPageNames.map(name => {
  return new HtmlWebpackPlugin({
    template: path.join(__dirname, `./src/partials/slider/${name}.html`),
    filename: `slider-${name}.html`,
  });
});

let multipleSliderPlugins_v2 = sliderPartialsPageNames_v2.map(name => {
  return new HtmlWebpackPlugin({
    template: path.join(__dirname, `./src/partials/slider_v2/${name}.html`),
    filename: `slider_v2-${name}.html`,
  });
});

let multipleBlockquotePlugins = blockquotePartialsPageNames.map(name => {
  return new HtmlWebpackPlugin({
    template: path.join(__dirname, `./src/partials/blockquote/${name}.html`),
    filename: `blockquote-${name}.html`,
  });
});

const currentLang = 'en';

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
      lang: currentLang,
    }),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/tab-panel.html'),
      filename: 'tab-panel.html',
      title: 'Development',
      lang: currentLang,
    }),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/accordeon.html'),
      filename: 'accordeon.html',
      title: 'Development',
      lang: currentLang,
    }),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/accordeon-2.html'),
      filename: 'accordeon-2.html',
      title: 'Development',
      lang: currentLang,
    }),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/slider.html'),
      filename: 'slider.html',
      title: 'Development',
      lang: currentLang,
    }),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/slider_v2.html'),
      filename: 'slider_v2.html',
      title: 'Development',
      lang: currentLang,
    }),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/blockquote.html'),
      filename: 'blockquote.html',
      title: 'Development',
      lang: currentLang,
    }),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/partials/skip-links.html'),
      filename: 'skip-links.html',
    }),

    ...multipleHtmlPlugins,
    ...multipleTabPanelPlugins,
    ...multipleAccordeonPlugins,
    ...multipleAccordeon2Plugins,
    ...multipleSliderPlugins,
    ...multipleBlockquotePlugins,
    ...multipleSliderPlugins_v2,
  ],
});
