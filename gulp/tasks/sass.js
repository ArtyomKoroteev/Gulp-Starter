const gulp = require('gulp'),
  sass = require('gulp-sass'),
  cssnano = require('gulp-cssnano'),
  notify = require('gulp-notify'),
  autoprefixer = require('gulp-autoprefixer'),
  sourcemaps = require('gulp-sourcemaps'),
  browserSync = require('browser-sync').create();

module.exports = function () {

  gulp.task('sass', () => {
    return gulp.src('src/sass/**/*.+(scss|sass)')
      .pipe(sourcemaps.init())
      .pipe(sass())
      .on("error", notify.onError({
        message: "Error: <%= error.message %>",
        title: "Error in SASS"
      }))
      .pipe(autoprefixer(['last 10 versions'], {
        cascade: true
      }))
      .pipe(browserSync.reload({
        stream: true
      }))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('dist/css'))
      .on('end', browserSync.reload);
  });

  gulp.task('css:build', () => {
    return gulp.src('dist/css/*.css')
      .pipe(cssnano())
      .pipe(gulp.dest('build/css'));
  });

}