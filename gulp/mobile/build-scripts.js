var gulp = require('gulp-help')(require('gulp')),
    gutil = require('gulp-util'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    size = require('gulp-size'),
    gulpif = require('gulp-if'),
    requirejs = require('requirejs'),
    vp = require('vinyl-paths'),
    del = require('del');

var envUtil = require('../common/env-util');

var paths = {
  origin: 'public/scripts/mobile',
  compiled: 'public/compiled/mobile/scripts'
};

gulp.task('mobile-build-libs-no-clean', function () {
  requirejs.optimize({
    baseUrl: paths.origin + '/../',
    name: 'mobile/optimize-main',
    mainConfigFile: paths.origin + '/optimize-require-config.js',
    out: paths.compiled + '/libs.min.js',
    optimize: 'uglify2',
    removeCombined: true
  }, function (data) {
    if (!envUtil.isProduction()) {
      gutil.log('modules of build libs in desktop', files);
    }
  }, function (err) {
    gutil.log('build libs error in mobile', err);
  });
});

gulp.task('mobile-build-custom-scripts-no-clean', function () {
  return gulp.src([
    paths.origin + '/**/*.js',
    '!' + paths.origin + '/optimize-main.js',
    '!' + paths.origin + '/optimize-require-config.js'
  ]).pipe(concat('apps.min.js').on('error', gutil.log))
      .pipe(gulpif(!envUtil.isProduction(), size({title: 'size of custom scripts in mobile'})))
      .pipe(uglify().on('error', gutil.log))
      .pipe(gulpif(!envUtil.isProduction(), size({title: 'size of uglify custom scripts in mobile'})))
      .pipe(gulp.dest(paths.compiled));
});

gulp.task('mobile-clean-scripts', function () {
  return gulp.src([
    paths.compiled + '/libs.min.js',
    paths.compiled + '/apps.min.js'
  ], {
    read: false
  }).pipe(vp(del).on('error', gutil.log));
});

gulp.task('mobile-build-scripts-no-clean', function () {
  gulp.start('mobile-build-libs-no-clean', 'mobile-build-custom-scripts-no-clean');
});

gulp.task('mobile-build-scripts', ['mobile-clean-scripts'], function () {
  gulp.start('mobile-build-libs-no-clean', 'mobile-build-custom-scripts-no-clean');
});