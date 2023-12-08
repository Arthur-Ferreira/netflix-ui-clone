const gulp = require('gulp');

const { stylesMin, imgMin, scriptsMin, htmlMin } = require('./tasks/minifiers');
const { watchFiles, server } = require('./tasks/server');


exports.server = gulp.series(
  gulp.parallel(
    gulp.series(htmlMin, stylesMin, scriptsMin)
  ),
  server,
  watchFiles
);

module.exports.default = gulp.series(htmlMin, stylesMin, scriptsMin, imgMin);
