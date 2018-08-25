const gulp = require('gulp'),
  cache = require('gulp-cache'),
  imagemin = require('gulp-imagemin'),
  pngquant = require('imagemin-pngquant');

module.exports = function () {

  gulp.task('img', () => {
    return gulp.src('src/img/**/*')
      .pipe(gulp.dest('dist/img'));
  });

  gulp.task('img:build', () => {
    return gulp.src('dist/img/**/*')
      .pipe(cache(imagemin({
        interlaced: true,
        progressive: true,
        svgoPlugins: [{
          removeViewBox: false
        }],
        use: [pngquant()]
      })))
      .pipe(gulp.dest('build/img'));
  });

}