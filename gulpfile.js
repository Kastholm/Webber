const { series, parallel, src, dest } = require("gulp");
const gulp = require("gulp");
const build = require("gulp-build");
const nunjucksRender = require("gulp-nunjucks-render");
const data = require("gulp-data");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync").create();
const connect = require("gulp-connect"); // Runs a local webserver
const open = require("gulp-open"); // Opens a URL in a web browser
const exec = require("child_process").exec; // run command-line programs from gulp
const execSync = require("child_process").execSync; // command-line reports
const minify = require("gulp-clean-css");
const prefix = require("gulp-autoprefixer");

// Launch Chrome web browser
// https://www.npmjs.com/package/gulp-open
function openBrowser(done) {
  var options = {
    uri: "http://localhost:8080",
  };
  return src("./build/pages/").pipe(open(options));
  done();
}

// Gulp plugin to run a webserver (with LiveReload)
// https://www.npmjs.com/package/gulp-connect
function server(done) {
  return connect.server({
    root: "./build/pages/",
    port: 8080,
    debug: true,
  });
  done();
}

// Commit and push files to Git
function git(done) {
  return exec('git add . && git commit -m "netlify deploy" && git push');
  done();
}

// Watch for netlify deployment
function netlify(done) {
  return new Promise(function (resolve, reject) {
    console.log(execSync("netlify watch").toString());
    resolve();
  });
}

// Preview Deployment
function netlifyOpen(done) {
  return exec("netlify open:site");
  done();
}

// Deploy command
exports.deploy = series(git, netlify, netlifyOpen);

// Building Main pages and using page_data.json
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

// Building hjemmeside single pages og anvender page_data.json
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

// Building blog single pages and using page_data.json
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

// Translating scss to css, cleaning and prefixing
function style() {
  return gulp
    .src("build/base/index.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(prefix("last 2 versions"))
    .pipe(minify())
    .pipe(gulp.dest("build/base"))
    .pipe(browserSync.stream());
}

//Watching for BrowserSync (gulp watch)
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
// Default Gulp command

// Running njk converters (gulp)
gulp.task(
  "default",
  gulp.parallel(
    "main-html",
    "hjemmeside-single",
    "blog-single",
    style,
    series(openBrowser, server)
  )
);
