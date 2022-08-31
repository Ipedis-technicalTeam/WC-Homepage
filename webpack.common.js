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
        test: /\.(png|svg|jpe?g|webp|pdf)/i,
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
        path: path.join(__dirname, "./src/partials/Navigation.html"),
        template_filename: "index.html",
        inject: true,
        location: "root",
      },
      {
        path: path.join(__dirname, "./src/partials/Header.html"),
        template_filename: "index.html",
        inject: true,
        location: "root",
      },
      {
        path: path.join(__dirname, "./src/partials/Main.html"),
        template_filename: "index.html",
        inject: true,
        location: "root",
      },
      {
        path: path.join(
          __dirname,
          "./src/partials/sections/Main_Features.html"
        ),
        template_filename: "index.html",
        inject: true,
        location: "main",
      },
      {
        path: path.join(
          __dirname,
          "./src/partials/sections/Recent_Components.html"
        ),
        template_filename: "index.html",
        inject: true,
        location: "main",
      },
      {
        path: path.join(
          __dirname,
          "./src/partials/sections/Recent_Templates.html"
        ),
        template_filename: "index.html",
        inject: true,
        location: "main",
      },
      {
        path: path.join(__dirname, "./src/partials/Footer.html"),
        template_filename: "index.html",
        inject: true,
        location: "root",
      },
    ]),
  ],
};
