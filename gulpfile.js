'use strict'

var gulp = require('gulp'),
	browserSync = require('browser-sync').create(),
	pug = require('gulp-pug'),
	sass = require('gulp-sass'),
	plumber = require('gulp-plumber'),
	notify = require('gulp-notify'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	htmlmin = require('gulp-htmlmin'),
	cssnano = require('gulp-cssnano'),
	sourcemaps = require('gulp-sourcemaps'),
	autoprefixer = require('gulp-autoprefixer'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant'),
	cache = require('gulp-cache'),
	del = require('del');

const path = {
			tasks: require('./gulp/gulpConfig.js')
}
path.tasks.forEach((taskPath)=>
	require(taskPath)());

// gulp.task('clear-cache', function () {
// 	return cache.clearAll();
// });

// gulp.task('clean', function () {
// 	return del.sync('dist/*');
// });

// gulp.task('build', function () {
// 	sequence('clean', ['html:build',
// 		'css:build',
// 		'js:build',
// 		'img:build'
// 	])
// });

// gulp.task('default', gulp.series(
// 	gulp.parallel('pug', 'sass', 'scripts', 'scripts:lib'),
// 	gulp.parallel('watch', 'browser-sync')
// ));