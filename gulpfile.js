const gulp = require("gulp");
const nunjucksRender = require("gulp-nunjucks-render");
const data = require("gulp-data");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync").create();

gulp.task("main-html", function () {
  return gulp
    .src("build/templates/*")
    .pipe(
      data(function () {
        return require("./build/components/page_data.json");
      })
    )
    .pipe(
      nunjucksRender({
        path: ["build/components"],
      })
    )
    .pipe(gulp.dest("build/pages"));
});

gulp.task("hjemmeside-single", function () {
  return gulp
    .src("build/templates/hjemmeside-single/*")
    .pipe(
      data(function () {
        return require("./build/components/page_data.json");
      })
    )
    .pipe(
      nunjucksRender({
        path: ["build/components"],
      })
    )
    .pipe(gulp.dest("build/pages/hjemmeside-single"));
});

gulp.task("blog-single", function () {
  return gulp
    .src("build/templates/blog-single/*/*")
    .pipe(
      data(function () {
        return require("./build/components/page_data.json");
      })
    )
    .pipe(
      nunjucksRender({
        path: ["build/components"],
      })
    )
    .pipe(gulp.dest("build/pages/blog-single"));
});

function style() {
  return gulp
    .src("build/base/index.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("build/base/"))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    startPath: "./build/pages",
    server: {
      baseDir: "./",
    },
  });
  gulp.watch("./scss/**/*.scss", style);
  gulp.watch("./build/base/*.scss", style);
  gulp.watch("./build/**/*.html").on("change", browserSync.reload);
  gulp.watch("./JS/**/*.js").on("change", browserSync.reload);
  gulp.watch("./build/base/*.js").on("change", browserSync.reload);
}

exports.style = style;
exports.watch = watch;

gulp.task(
  "default",
  gulp.parallel("main-html", "hjemmeside-single", "blog-single")
);
