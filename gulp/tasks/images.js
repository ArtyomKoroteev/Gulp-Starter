const gulp =          require('gulp'),
      imagemin =      require('gulp-imagemin'),
      pngquant =      require('imagemin-pngquant');

  module.exports = function () {

    gulp.task('img:build', () => {
      return gulp.src('src/img/**/*')
        .pipe(cache(imagemin({
          interlaced: true,
          progressive: true,
          svgoPlugins: [{
            removeViewBox: false
          }],
          use: [pngquant()]
        })))
        .pipe(gulp.dest('dist/img'));
    });

  }