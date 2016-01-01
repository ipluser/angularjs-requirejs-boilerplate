var gulp = require('gulp');

require('./build-scripts.js');
require('./build-styles.js');

gulp.task('desktop-clean', function () {
  gulp.start('desktop-clean-scripts', 'desktop-clean-styles');
});

gulp.task('desktop-build-no-clean', function () {
  gulp.start('desktop-build-scripts-no-clean', 'desktop-build-styles-no-clean');
});

gulp.task('desktop-build', function () {
  gulp.start('desktop-build-scripts', 'desktop-build-styles');
});
