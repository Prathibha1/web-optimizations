// Include gulp
var gulp = require('gulp');

//Include Our Plugins
//var jshint = require('gulp-jshint');
//var sass = require('gulp-sass');
//var concat = require('gulp-concat');
//var uglify = require('gulp-uglify');
//var rename = require('gulp-rename');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
//var imageminJpegRecompress = require('imagemin-jpeg-recompress')


gulp.task('compress-images', function(){
    return gulp.src('./views/images/*')
     .pipe(imagemin({
        progressive: true
    }))
     .pipe(gulp.dest('./views/img/'))
});

//uglify js
gulp.task('compress', function() {
    return gulp.src('./views/js/main.js')
    .pipe(uglify({
        keepBreaks: true
    }))
    .pipe(gulp.dest('./views/pre-js'))
});

//Minify style.css in css folder
gulp.task('minify-css', function() {
     return gulp.src('./views/pre-css/bootstrap-grid.css')
     .pipe(minifyCSS({
        keepSpecialComments: 1
     }))
     .pipe(gulp.dest('./views/css2'))
});

// Minify main.js in views folder JS
gulp.task('minpizzajs', function() {
    return gulp.src('views/js/main.js')
        .pipe(gulp.dest('views/dist/js'))
        .pipe(rename('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('views/dist/js'));
});

// Minify bootstrap-grid.css in views/css and pipe to dist/css
gulp.task('minify-pizzacss', function() {
  gulp.src('./views/css/bootstrap-grid.css')
    .pipe(rename("bootstrap-grid.min.css"))
    .pipe(minifyCSS({keepBreaks:false}))
    .pipe(gulp.dest('views/dist/css'))
});

// Default Task
gulp.task('default', ['minpizzajs', 'minify-pizzacss', 'minify-css','compress-images','compress']);