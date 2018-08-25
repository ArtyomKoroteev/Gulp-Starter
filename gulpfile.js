'use strict'
const gulp = require('gulp');

const path = {
	tasks: require('./gulp/path/gulpConfig.js')
}

path.tasks.forEach((taskPath) =>
	require(taskPath)());

gulp.task('build', gulp.series(
	'clean',
	gulp.parallel('html:build', 'css:build', 'scripts:build','img:build')
));

gulp.task('default', gulp.series(
	gulp.parallel('pug', 'sass', 'scripts', 'scriptsLib', 'svg', 'img'),
	gulp.parallel('watch', 'browser-sync')
));