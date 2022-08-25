const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPartialsPlugin = require("html-webpack-partials-plugin");

module.exports = {
  entry: "./src/index.js",

  module: {
    rules: [
      // HTML LOADER
      {
        test: /\.html$/i,
        loader: "html-loader",
      },

      // ASSETS LOADER
      {
        test: /\.(png|svg|jpe?g|webp|pdf)$/i,
        type: "asset/resource",
        generator: {
          filename: "./assets/images/[name][ext]",
        },
      },
      {
        test: /\.(woff(2)?|ttf|otf|eot)(\?v=\d+\.\d+\.\d+)?$/i,
        type: "asset/resource",
        generator: {
          filename: "./assets/fonts/[name][ext]",
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      minify: true,
    }),

    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, "./src/partials/header.html"),
        template_filename: "index.html",
      },
      {
        path: path.join(__dirname, "./src/partials/body.html"),
        template_filename: "index.html",
      },
      {
        path: path.join(__dirname, "./src/partials/footer.html"),
        template_filename: "index.html",
      },
    ]),
  ],
};
