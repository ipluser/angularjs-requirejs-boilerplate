var gulp = require('gulp-help')(require('gulp'));

require('./build-scripts');
require('./build-styles');
require('./build-templates');

gulp.task('desktop-clean', function () {
  gulp.start('desktop-clean-scripts', 'desktop-clean-styles',
      'desktop-clean-templates');
});

gulp.task('desktop-build-no-clean', function () {
  gulp.start('desktop-build-scripts-no-clean', 'desktop-build-styles-no-clean',
      'desktop-build-templates-no-clean');
});

gulp.task('desktop-build', function () {
  gulp.start('desktop-build-scripts', 'desktop-build-styles',
      'desktop-build-templates');
});
