const gulp =          require('gulp'),
      browserSync =   require('browser-sync').create();

module.exports = function() {

  gulp.task('browser-sync', () => {
    browserSync.init({
      server: {
        baseDir: './src'
      },
      notify: false
    });
  });

}