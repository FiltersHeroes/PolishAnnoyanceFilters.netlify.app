var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");

gulp.task('minify-html', () => {
    return gulp.src('public/**/*.html')
      .pipe(htmlmin({
        collapseWhitespace: true,
        html5: true,
        minifyCSS: true,
        minifyJS: true,
        useShortDoctype: true,
      }))
      .pipe(gulp.dest('./public'));
  });

// Compile SCSS files to CSS
gulp.task("sass", function () {
  return gulp.src("assets/sass/*.scss")
      .pipe(sass({
          outputStyle : "compressed"
      }))
      .pipe(autoprefixer({
          browsers : ["last 20 versions"]
      }))
      .pipe(gulp.dest("assets/css"));
});
