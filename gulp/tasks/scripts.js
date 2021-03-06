const gulp = require('gulp'),
  babel = require('gulp-babel'),
  browserSync = require('browser-sync').create(),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat');

module.exports = function () {

  gulp.task('scripts', () => {
    return gulp.src('src/js/script.js')
      .pipe(browserSync.reload({
        stream: true
      }))
      .pipe(babel({
        presets: ['env']
      }))
      .pipe(gulp.dest('dist/js'));
  });

  gulp.task('scriptsLib', () => {
    return gulp.src([
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/svg4everybody/dist/svg4everybody.min.js'
      ])
      .pipe(concat('libs.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'))

  });

  gulp.task('scripts:build', () => {
    return gulp.src('dist/js/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('build/js'));
  });

}