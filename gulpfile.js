const config = require("./src/config/gulpfile.config");
const consolidate = require("gulp-consolidate");
const del = require("del");
const gulp = require("gulp");
const gulpSequence = require("gulp-sequence");
const iconFont = require("gulp-iconfont");
const rename = require("gulp-rename");
const sha1File = require("sha1-file");
const sha1 = require("node-sha1");
const fs = require("fs");
const path = require("path");

// ################################################# \\
const argv = require("yargs").argv;
var fontPath = argv.prod
  ? "~src/assets/fonts/icons/"
  : "~src/assets/fonts/icons/";
var iconPath = config.icon.LP;
var destPath = config.icon.DESTINATION;
var generatedPath = config.icon.GENERATED_SCSS;

let concatenatedHash = "";
/****/

fs.readdirSync(iconPath).forEach(
  (file) => (concatenatedHash += sha1File(path.resolve(iconPath, file)))
);
const runTimestamp = sha1(concatenatedHash).substring(0, 6);

// ################# ICONTASK ################### \\
gulp.task("iconFontTask", function () {
  return gulp
    .src(iconPath + "/*.svg")
    .pipe(
      iconFont({
        fontName: "icons-" + runTimestamp,
        appendUnicode: false,
        formats: ["ttf", "eot", "woff", "svg"],
        centerHorizontally: true,
        normalize: true,
        fontHeight: 1001,
        fixedWidth: false,
        timestamp: runTimestamp,
      })
    )
    .on("glyphs", function (glyphs) {
      gulp
        .src(config.icon.TEMPLATE)
        .pipe(
          consolidate("lodash", {
            glyphs: glyphs,
            fontName: "icons-" + runTimestamp,
            fontPath: fontPath, // Font Path relative to compiled css
            className: "lp-icon",
          })
        )
        .pipe(
          rename(function (path) {
            path.extname = ".scss";
          })
        )
        .pipe(gulp.dest(generatedPath));
    })
    .pipe(gulp.dest(destPath));
});

// ################# CLEANTASK ################### \\

gulp.task("cleanBuild", function () {
  return del([destPath], { force: true }).then(function (paths) {
    console.log("Files and folders that would be deleted:\n", paths.join("\n"));
  });
});

// ################################################# \\

gulp.task("build-icons", gulp.series("cleanBuild", "iconFontTask"));

gulp.task("default", gulp.series("build-icons"));
