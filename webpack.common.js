const path = require('path');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');
const htmlPartialsPageNames = require('./src/partials').htmlPartialsPageNames;
const tabPanelPartialsPageNames = require('./src/partials/tab-panel').tabPanelPartialsPageNames;
const accordeonPartialsPageNames = require('./src/partials/accordeon').accordeonPartialsPageNames;
const sliderPartialsPageNames = require('./src/partials/slider').sliderPartialsPageNames;
const sliderPartialsPageNames_v2 = require('./src/partials/slider_v2').sliderPartialsPageNames_v2;
const blockquotePartialsPageNames = require('./src/partials/blockquote').blockquotePartialsPageNames;

let multipleHtmlPartialsPlugins = htmlPartialsPageNames.map(name => {
  return {
    path: path.join(__dirname, `./src/partials/${name}.html`),
    template_filename: 'index.html',
    inject: true,
    location: 'root',
  };
});

let multipleTabPanelPartialsPlugins = tabPanelPartialsPageNames.map(name => {
  return {
    path: path.join(__dirname, `./src/partials/tab-panel/${name}.html`),
    template_filename: 'tab-panel.html',
    inject: true,
    location: 'root',
  };
});

let multipleAccordeonPlugins = accordeonPartialsPageNames.map(name => {
  return {
    path: path.join(__dirname, `./src/partials/accordeon/${name}.html`),
    template_filename: 'accordeon.html',
    inject: true,
    location: 'root',
  };
});

let multipleSliderPlugins = sliderPartialsPageNames.map(name => {
  return {
    path: path.join(__dirname, `./src/partials/slider/${name}.html`),
    template_filename: 'slider.html',
    inject: true,
    location: 'root',
  };
});

let multipleSliderPlugins_v2 = sliderPartialsPageNames_v2.map(name => {
  return {
    path: path.join(__dirname, `./src/partials/slider_v2/${name}.html`),
    template_filename: 'slider_v2.html',
    inject: true,
    location: 'root',
  };
});

let multipleBlockquotePartialsPlugins = blockquotePartialsPageNames.map(name => {
  return {
    path: path.join(__dirname, `./src/partials/blockquote/${name}.html`),
    template_filename: 'blockquote.html',
    inject: true,
    location: 'root',
  };
});

module.exports = {
  entry: {
    index: './src/index.js',
  },

  module: {
    rules: [
      // // ASSETS LOADER
      {
        test: /\.(png|svg|jpe?g|webp|pdf)$/i,
        type: 'asset/resource',
        generator: {
          filename: './assets/images/[name][ext]',
        },
      },
      {
        test: /\.(woff(2)?|ttf|otf|eot)(\?v=\d+\.\d+\.\d+)?$/i,
        type: 'asset/resource',
        generator: {
          filename: './assets/fonts/[name][ext]',
        },
      },
    ],
  },

  resolve: {
    fallback: {
      fs: false,
    },
  },

  plugins: [
    // PARTIALS HTML
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/skip-links.html'),
        template_filename: [
          'index.html',
          'tab-panel.html',
          'accordeon.html',
          'slider.html',
          'slider_v2.html',
          'blockquote.html',
        ],
        inject: true,
        location: 'root',
      },
      ...multipleHtmlPartialsPlugins,
      ...multipleTabPanelPartialsPlugins,
      ...multipleAccordeonPlugins,
      ...multipleSliderPlugins,
      ...multipleSliderPlugins_v2,
      ...multipleBlockquotePartialsPlugins
    ]),
  ],
};
