var gulp = require('gulp-help')(require('gulp'));

require('./build-scripts');
require('./build-styles');
require('./build-templates');

gulp.task('mobile-clean', function () {
  gulp.start('mobile-clean-scripts', 'mobile-clean-styles',
      'mobile-clean-templates');
});

gulp.task('mobile-build-no-clean', function () {
  gulp.start('mobile-build-scripts-no-clean', 'mobile-build-styles-no-clean',
      'mobile-build-templates-no-clean');
});

gulp.task('mobile-build', function () {
  gulp.start('mobile-build-scripts', 'mobile-build-styles',
      'mobile-build-templates');
});
