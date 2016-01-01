var gulp = require('gulp'),
    gutil = require('gulp-util'),
    less = require('gulp-less'),
    minifycss = require('gulp-minify-css'),
    size = require('gulp-size'),
    vp = require('vinyl-paths'),
    del = require('del');

var paths = {
  origin: 'public/styles/mobile',
  compiled: 'public/compiled/mobile/styles'
};

gulp.task('mobile-build-styles-no-clean', function () {
  return gulp.src(paths.origin + '/**/*.less')
      .pipe(size({
        title: 'size of less in mobile'
      }))
      .pipe(less().on('error', gutil.log))
      .pipe(size({
        title: 'size of css in mobile, after less2css'
      }))
      .pipe(minifycss().on('error', gutil.log))
      .pipe(size({
        title: 'size of css in mobile, after minify css'
      }))
      .pipe(gulp.dest(paths.compiled));
});

gulp.task('mobile-clean-styles', function () {
  return gulp.src(paths.compiled, {
    read: false
  }).pipe(vp(del).on('error', gutil.log));
});

gulp.task('mobile-build-styles', ['mobile-clean-styles'], function () {
  gulp.start('mobile-build-styles-no-clean');
});