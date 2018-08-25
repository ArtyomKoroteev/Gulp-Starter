const gulp =          require('gulp'),
      cache =         require('gulp-cache'),
      del =           require('del');

module.exports = function () {

  gulp.task('clean', () => {
    return del('./build');
  });

  gulp.task('clear-cache',() => {
    return cache.clearAll();
  });

}