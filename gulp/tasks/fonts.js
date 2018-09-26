const gulp = require('gulp');

module.exports = function () {
  gulp.task('fonts', () => {
    return gulp.src('src/fonts/**/*.*')
      .pipe(gulp.dest('dist/fonts'));
  });

  gulp.task('fonts:build', () => {
    return gulp.src('dist/fonts/**/*.*')
      .pipe(gulp.dest('build/fonts'));
  });
};