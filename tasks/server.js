const gulp = require('gulp');
const webserver = require('gulp-webserver');
const watch = require('gulp-watch');


function server() {
  return gulp.src('build')
  .pipe(webserver({
    port: 8080,
    open: true,
    livereload: true,
  }))
}


function watchFiles(cb) {
  watch('src/**/*.html', () => gulp.series('htmlMin')())
  watch('src/**/*.scss', () => gulp.series('stylesMin')())
  watch('src/**/*.js', () => gulp.series('scriptsMin')())
  watch('src/images/**/*.*', () => gulp.series('imgMin')())
  return cb()
}



module.exports = { watchFiles, server }