const path = require('path');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');
const htmlPartialsPageNames = require('./src/partials').htmlPartialsPageNames;
const singleCompPartialsPageNames =
  require('./src/partials/single-component').singleCompPartialsPageNames;
const blockquotePartialsPageNames =
  require('./src/partials/blockquote').blockquotePartialsPageNames;

let multipleHtmlPartialsPlugins = htmlPartialsPageNames.map(name => {
  return {
    path: path.join(__dirname, `./src/partials/${name}.html`),
    template_filename: 'index.html',
    inject: true,
    location: 'root',
  };
});

let multipleSingleCompPartialsPlugins = singleCompPartialsPageNames.map(name => {
  return {
    path: path.join(__dirname, `./src/partials/single-component/${name}.html`),
    template_filename: 'single-component.html',
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
        template_filename: ['index.html', 'single-component.html', 'blockquote.html'],
        inject: true,
        location: 'root',
      },
      ...multipleHtmlPartialsPlugins,
      ...multipleSingleCompPartialsPlugins,
      ...multipleBlockquotePartialsPlugins,
      {
        path: path.join(__dirname, './src/partials/footer.html'),
        template_filename: ['index.html', 'single-component.html', 'blockquote.html'],
        inject: true,
        location: 'root',
      },
    ]),
  ],
};
