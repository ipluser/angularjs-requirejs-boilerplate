var gulp = require('gulp');

require('./desktop/build.js');
require('./mobile/build.js');

gulp.task('clean-scripts', function () {
  gulp.start('desktop-clean-scripts', 'mobile-clean-scripts');
});

gulp.task('clean-styles', function () {
  gulp.start('desktop-clean-styles', 'mobile-clean-styles');
});

gulp.task('clean', function () {
  gulp.start('desktop-clean', 'mobile-clean');
});

gulp.task('build-scripts-no-clean', function () {
  gulp.start('desktop-build-scripts-no-clean', 'mobile-build-scripts-no-clean');
});

gulp.task('build-scripts', function () {
  gulp.start('desktop-build-scripts', 'mobile-build-scripts');
});

gulp.task('build-styles-no-clean', function () {
  gulp.start('desktop-build-styles-no-clean', 'mobile-build-styles-no-clean');
});

gulp.task('build-styles', function () {
  gulp.start('desktop-build-styles', 'mobile-build-styles');
});

gulp.task('build-no-clean', function () {
  gulp.start('desktop-build-no-clean', 'mobile-build-no-clean');
});

gulp.task('build', function () {
  gulp.start('desktop-build', 'mobile-build');
});

gulp.task('default', function () {
  gulp.start('desktop-build', 'mobile-build');
});