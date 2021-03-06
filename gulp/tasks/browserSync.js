const gulp =          require('gulp'),
      browserSync =   require('browser-sync').create();

module.exports = function() {

  gulp.task('browser-sync', () => {
    browserSync.init({
      server: {
        baseDir: './dist'
      },
      notify: false
    });
    browserSync.watch('src', browserSync.reload);
  });

}