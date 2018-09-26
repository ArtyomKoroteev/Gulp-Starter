'use strict'
const gulp = require('gulp');

const path = {
	tasks: require('./gulp/path/gulpConfig.js')
}

path.tasks.forEach((taskPath) =>
	require(taskPath)());

gulp.task('build', gulp.series(
	'clean',
	gulp.parallel('html:build', 'css:build', 'scripts:build','img:build', 'fonts:build')
));

gulp.task('default', gulp.series(
	gulp.parallel('pug', 'sass', 'scripts', 'scriptsLib', 'svg', 'img', 'fonts'),
	gulp.parallel('watch', 'browser-sync')
));