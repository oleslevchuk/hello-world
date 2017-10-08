var gulp = require('gulp');
var sass = require('gulp-sass');
// var concatJs = require("gulp-concat-js");
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();
var imagemin = require('gulp-imagemin');
var cssMin = require('gulp-cssmin');

// sass/scss->css
gulp.task('style', function() {
	return gulp.src('styles/**/*.css')
		// .pipe(sass())
		.pipe(concat('style.css'))
		.pipe(gulp.dest('bild'))

})
//all js -> js
gulp.task('script', function() {
	return gulp.src('js/**/*.js')
		.pipe(concat('main.js'))
		.pipe(gulp.dest('bild'))

})
//css -> min.css
gulp.task('css', function() {
	return gulp.src(['bild/**/*.css'])
		.pipe(concat('style.min.css'))
		.pipe(cssMin())
		.pipe(gulp.dest('bild'))
})
// html -> html
gulp.task('html', function() {
	return gulp.src('templates/**/*.html')
		.pipe(concat('index.html'))
		.pipe(gulp.dest('bild'))
})

//all img -> min.img
gulp.task('image', function() {
	return gulp.src('images/**/*.*')
		.pipe(imagemin())
		.pipe(gulp.dest('bild/media'))

})

gulp.task('default',['style', 'html', 'css', 'script', 'image'], function() {

    browserSync.init({
        server: "./bild"
    });


    gulp.watch('styles/**/*.css', ['style'])
	gulp.watch('templates/**/*.html', ['html'])
	gulp.watch('js/**/*.js', ['script'])
	gulp.watch('images/**/*.*', ['image'])

    gulp.watch("bild/**/*.*").on('change', browserSync.reload);
});

