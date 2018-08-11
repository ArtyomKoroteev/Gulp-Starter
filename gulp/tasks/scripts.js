const gulp =           require('gulp'),
      browserSync =    require('browser-sync').create(),
      uglify =         require('gulp-uglify'),
      concat =         require('gulp-concat');

module.exports = function () {

  gulp.task('scripts', () => {
    return gulp.src('src/js/script.js')
      .pipe(browserSync.reload({
        stream: true
      }));
  });

  gulp.task('scriptsLib', () => {
    return gulp.src([
        'node_modules/jquery/dist/jquery.min.js',
      ])
      .pipe(concat('libs.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('src/js'))

  });

  gulp.task('scripts:build', () => {
    return gulp.src('src/js/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'));
  });

}