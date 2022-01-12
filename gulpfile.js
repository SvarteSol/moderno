var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass')(require('sass'));
//var rename = require('gulp-rename');
//var autoprefixer = require('gulp-autoprefixer')(require('autoprefixer'));
const autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');


gulp.task('serve', function () {

    browserSync.init({
        server: "./app"
    });
    // attention in the first String()
    gulp.watch("app/scss/**/*.scss", gulp.series('buildCSS'));
    gulp.watch("app/scripts/*.js", gulp.series('scripts'));
    gulp.watch("app/*.html").on('change', browserSync.reload);

});

gulp.task('buildCSS', function () {
    // attention in the first String()
    return gulp.src(['app/scss/**/*.scss']).
        pipe(sass({outputStyle: 'compressed'})).
        //pipe(rename({suffix:'.min'})).
        pipe(gulp.dest("app/dest/styles")).
        pipe(autoprefixer({overrideBrowserslist: ['last 8 version'] })).
        pipe(browserSync.stream());

        


});

gulp.task('style', function () {

    return gulp.src([
        'node_modules/normalize.css/normalize.css',
        // 'node_modules/slick-carousel/slick/slick.js',
        'node_modules/magnific-popup/dist/magnific-popup.css',
        'node_modules/rateyo/src/jquery.rateyo.css',
        'node_modules/nouislider/dist/nouislider.css'

    ]).
        pipe(concat('libs.min.css')).
        pipe(cssmin()).
        pipe(gulp.dest("app/css")).
        pipe(browserSync.stream());

//("app/scripts/*.js").return it in (gulp.src)
});



gulp.task('scripts', function () {

    return gulp.src([
        
        'node_modules/slick-carousel/slick/slick.js',
        'node_modules/magnific-popup/dist/jquery.magnific-popup.js',
        'node_modules/mixitup/dist/mixitup.js',
        'node_modules/rateyo/src/jquery.rateyo.js',
        'node_modules/slick-carousel/slick/slick.js',
        'node_modules/nouislider/dist/nouislider.js'
    ]).
        pipe(concat('libs.min.js')).
        pipe(uglify()).
        pipe(gulp.dest("app/dest/scripts")).
        pipe(browserSync.stream());

//("app/scripts/*.js").return it in (gulp.src)
});











gulp.task('start', gulp.series('serve', 'buildCSS', 'scripts'));


gulp.task('default', gulp.parallel('style', 'serve', 'buildCSS', 'scripts'));


// ({ includePaths: ['node_modules']})add it to pipe(sass)