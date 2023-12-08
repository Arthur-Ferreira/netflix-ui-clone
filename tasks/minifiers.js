const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');


function htmlMin() {
  return gulp.src('src/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('build'))
}

function stylesMin() {
  return gulp.src('src/sass/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest('build/styles'));
}

function scriptsMin() {
  return gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/scripts'))
}

function imgMin() {
  return gulp.src('src/imgs/**/*.{jpg, png}')
    .pipe(imagemin([
      imagemin.mozjpeg({ quality: 80, progressive: true }),
      imagemin.optipng({ optimizationLevel: 2 }),
    ]))
    .pipe(gulp.dest('build/images'));
}


gulp.task('htmlMin', htmlMin);
gulp.task('stylesMin', stylesMin);
gulp.task('scriptsMin', scriptsMin);
gulp.task('imgMin', imgMin);

module.exports = {
  stylesMin,
  imgMin,
  scriptsMin,
  htmlMin,
}