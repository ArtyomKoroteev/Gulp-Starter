'use strict'

const path = {
			tasks: require('./gulp/gulpConfig.js')
}

path.tasks.forEach((taskPath) =>
	require(taskPath)());

gulp.task('build', function () {
	gulp.parallel('clean',
		'html:build',
		'css:build',
		'js:build',
		'img:build')
});

gulp.task('default', gulp.series(
	gulp.parallel('pug', 'sass', 'scripts', 'scripts:lib'),
	gulp.parallel('watch', 'browser-sync')
));