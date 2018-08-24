const gulp = require('gulp');

  module.exports = function () {

    gulp.task('img', () => {
      return gulp.src('src/img/**/*.jpg')
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