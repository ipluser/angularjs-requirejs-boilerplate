var gulp = require('gulp');

require('./build-scripts.js');
require('./build-styles.js');

gulp.task('mobile-clean', function () {
  gulp.start('mobile-clean-scripts', 'mobile-clean-styles');
});

gulp.task('mobile-build-no-clean', function () {
  gulp.start('mobile-build-scripts-no-clean', 'mobile-build-styles-no-clean');
});

gulp.task('mobile-build', function () {
  gulp.start('mobile-build-scripts', 'mobile-build-styles');
});
