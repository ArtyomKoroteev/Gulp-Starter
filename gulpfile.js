'use strict'
const gulp = require('gulp');

const path = {
	tasks: require('./gulp/path/gulpConfig.js')
}

path.tasks.forEach((taskPath) =>
	require(taskPath)());

gulp.task('build', gulp.series(
	gulp.parallel('clean',
		'html:build',
		'css:build',
		'js:build',
		'img:build')
));

gulp.task('default', gulp.series(
	gulp.parallel('pug', 'sass', 'scripts', 'scriptsLib', 'svg', 'img'),
	gulp.parallel('watch', 'browser-sync')
));