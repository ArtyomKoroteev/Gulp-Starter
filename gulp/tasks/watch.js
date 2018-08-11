const gulp = require('gulp');

module.exports = function() {

  gulp.task('watch', ()=> {
    gulp.watch('src/pug/**/*.pug', gulp.series('pug'));
    gulp.watch('src/sass/**/*.+(scss|sass)', gulp.series('sass'));
    gulp.watch('src/js/**/*.js', gulp.series('scripts'));
  });

}