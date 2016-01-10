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
  origin: 'public/scripts/desktop',
  compiled: 'public/compiled/desktop/scripts'
};

gulp.task('desktop-build-libs-no-clean', function () {
  requirejs.optimize({
    baseUrl: paths.origin + '/../',
    name: 'desktop/optimize-main',
    mainConfigFile: paths.origin + '/optimize-require-config.js',
    out: paths.compiled + '/libs.min.js',
    optimize: 'uglify2',
    removeCombined: true
  }, function (files) {
    if (!envUtil.isProduction()) {
      gutil.log('modules of build libs in desktop', files);
    }
  }, function (err) {
    gutil.log('build libs error in desktop', err);
  });
});

gulp.task('desktop-build-custom-scripts-no-clean', function () {
  return gulp.src([
    paths.origin + '/**/*.js',
    '!' + paths.origin + '/optimize-main.js',
    '!' + paths.origin + '/optimize-require-config.js'
  ]).pipe(concat('apps.min.js').on('error', gutil.log))
      .pipe(gulpif(!envUtil.isProduction(), size({title: 'size of custom scripts in desktop'})))
      .pipe(uglify().on('error', gutil.log))
      .pipe(gulpif(!envUtil.isProduction(), size({title: 'size of uglify custom scripts in desktop'})))
      .pipe(gulp.dest(paths.compiled));
});

gulp.task('desktop-clean-scripts', function () {
  return gulp.src([
    paths.compiled + '/libs.min.js',
    paths.compiled + '/apps.min.js'
  ], {
    read: false
  }).pipe(vp(del).on('error', gutil.log));
});

gulp.task('desktop-build-scripts-no-clean', function () {
  gulp.start('desktop-build-libs-no-clean', 'desktop-build-custom-scripts-no-clean');
});

gulp.task('desktop-build-scripts', ['desktop-clean-scripts'], function () {
  gulp.start('desktop-build-libs-no-clean', 'desktop-build-custom-scripts-no-clean');
});