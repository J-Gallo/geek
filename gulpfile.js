var gulp        = require('gulp'),
    concat      = require('gulp-concat'),
    del         = require('del'); // rm -rf
    uglify      = require('gulp-uglify'),
    nodemon     = require('gulp-nodemon')

gulp.task('delete', function() {
  return del(['dist']);
});

gulp.task('server', function () {
    nodemon({
        watch: './'
        , ext: 'js css hbs'
        , env: { 'NODE_ENV': 'development' }
    })
});

gulp.task('bundleJs', ['delete'], function () {
  var jqueryFiles     = './node_modules/jquery/dist/jquery.min.js';
  return gulp.src([jqueryFiles, './src/js/*'])
    .pipe(concat('generator.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('copyImages', ['delete'], function() {
    return gulp.src('./src/img/*')
      .pipe(gulp.dest('dist/images'));
});

gulp.task('copyFonts', ['delete'], function() {
  return gulp.src('./src/fonts/*')
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('build', ['delete', 'copyImages', 'copyFonts', 'bundleJs']);

gulp.task('default', ['build','server']);
