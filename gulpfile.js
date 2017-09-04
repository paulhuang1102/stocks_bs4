var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var connect = require('gulp-connect');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('pug', function() {
    return gulp.src('./source/*.pug')
        .pipe(connect.reload())
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./docs'))
});

gulp.task('sass', function() {
    var plugins = [
        autoprefixer({ browsers: ['last 2 version', '>5%', 'ie 8'] }),
    ];
    return gulp.src('./source/sass/*.sass')
        .pipe(connect.reload())
        .pipe(plumber())
        .pipe(postcss(plugins))
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('docs/css'));
});

gulp.task('connect', function() {
   return connect.server({
       root: './docs',
       livereload: true
   }) ;
});

gulp.task('babel', function() {
    return gulp.src('./source/js/*.js')
        .pipe(connect.reload())
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(babel({
            presets: ['es2015']
        }))
        // .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./docs/js'));
});

gulp.task('watch', function() {
    gulp.watch(['source/*.pug', 'source/partials/*.pug', 'source/sass/*.sass', 'source/js/*.js'], [ 'pug', 'pug', 'sass', 'babel']);
});

gulp.task('default', ['connect', 'watch']);