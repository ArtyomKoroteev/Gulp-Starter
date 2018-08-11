const gulp = require('gulp'),
      pug = require('gulp-pug'),
      plumber = require('gulp-plumber'),
      notify = require('gulp-notify'),
      htmlmin = require('gulp-htmlmin'),
      browserSync = require('browser-sync').create();

module.exports = function () {

  gulp.task('pug', () => {
    return gulp.src('src/pug/*.pug')
      .pipe(plumber())
      .pipe(pug({
        pretty: true
      }))
      .on("error", notify.onError({
        message: "Error: <%= error.message %>",
        title: "Error in PUG"
      }))
      .pipe(gulp.dest('src'))
      .on('end', browserSync.reload);
  });

  gulp.task('html:build', ()=> {

    return gulp.src('src/*.html')
      .pipe(htmlmin({
        sortAttributes: true,
        sortClassName: true,
        collapseWhitespace: true
      }))
      .pipe(gulp.dest('dist'));
  });

}