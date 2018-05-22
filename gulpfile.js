'use strict'

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	htmlmin = require('gulp-htmlmin'),
	cssnano = require('gulp-cssnano'),
	sourcemaps = require('gulp-sourcemaps'),
	autoprefixer = require('gulp-autoprefixer'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant'),
	cache = require('gulp-cache'),
	del = require('del'),
	sequence = require('run-sequence');

gulp.task('sass', function () {

	return gulp.src('src/sass/**/*.+(scss|sass)')

		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer(['last 10 versions'], {
			cascade: true
		}))
		.pipe(sourcemaps.write())
		.pipe(browserSync.reload({
			stream: true
		}))
		.pipe(gulp.dest('src/css'));
});

gulp.task('js', function () {

	return gulp.src([
		'src/libs/jquery/dist/jquery.min.js'
	])
		.pipe(concat('libs.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('src/js'));

});

gulp.task('html:build', function () {

	return gulp.src('src/*.html')
		.pipe(htmlmin({
			sortAttributes: true,
			sortClassName: true,
			collapseWhitespace: true
		}))
		.pipe(gulp.dest('dist'));
});

gulp.task('css:build', function () {

	return gulp.src('src/css/*.css')
		.pipe(cssnano())
		.pipe(gulp.dest('dist/css'));

});

gulp.task('js:build', function () {

	return gulp.src('src/js/*.js')

		.pipe(gulp.dest('dist/js'));

});

gulp.task('img:build', function () {
	return gulp.src('src/img/**/*')
		.pipe(cache(imagemin({
			interlaced: true,
			progressive: true,
			svgoPlugins: [{
				removeViewBox: false
			}],
			use: [pngquant()]
		})))
		.pipe(gulp.dest('dist/img'));
});

gulp.task('browser-sync', function () {

	browserSync({
		server: {
			baseDir: 'src'
		},
		notify: false
	});

});

gulp.task('clear-cache', function () {
	return cache.clearAll();
});

gulp.task('clean', function () {
	return del.sync('dist/*');
});

gulp.task('watch', ['browser-sync', 'js'], function () {
	gulp.watch('src/sass/**/*.+(scss|sass)', ['sass']);
	gulp.watch('src/js/**/*.js', browserSync.reload);
	gulp.watch('src/**/*.html', browserSync.reload);
});

gulp.task('build', function () {
	sequence('clean', ['html:build',
    'css:build',
	'js:build',
    'img:build'])
});

gulp.task('default', ['watch']);
