const gulp =          require('gulp'),
      cache =         require('gulp-cache'),
      del =           require('del');

module.exports = function () {

  gulp.task('clean', function () {
    return del.sync('dist/*');
  });

  gulp.task('clear-cache', function () {
    return cache.clearAll();
  });

}