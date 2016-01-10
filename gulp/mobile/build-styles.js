var gulp = require('gulp-help')(require('gulp')),
    gutil = require('gulp-util'),
    less = require('gulp-less'),
    minifycss = require('gulp-minify-css'),
    size = require('gulp-size'),
    gulpif = require('gulp-if'),
    plumber = require('gulp-plumber'),
    vp = require('vinyl-paths'),
    del = require('del');

var envUtil = require('../common/env-util'),
    browserSync = require('../develop/build-browser-sync');

var paths = {
  origin: 'public/styles/mobile',
  compiled: 'public/compiled/mobile/styles'
};

gulp.task('mobile-build-styles-no-clean', function () {
  return gulp.src(paths.origin + '/**/*.less')
      .pipe(plumber())
      .pipe(gulpif(!envUtil.isProduction(), size({title: 'size of less in mobile'})))
      .pipe(less().on('error', gutil.log))
      .pipe(gulpif(!envUtil.isProduction(), size({title: 'size of css in mobile, after less2css'})))
      .pipe(minifycss().on('error', gutil.log))
      .pipe(gulpif(!envUtil.isProduction(), size({title: 'size of css in mobile, after minify css'})))
      .pipe(gulp.dest(paths.compiled))
      .pipe(gulpif(envUtil.isDevelopment(), browserSync.stream()));
});

gulp.task('mobile-clean-styles', function () {
  return gulp.src(paths.compiled, {
    read: false
  }).pipe(vp(del).on('error', gutil.log));
});

gulp.task('mobile-build-styles', ['mobile-clean-styles'], function () {
  gulp.start('mobile-build-styles-no-clean');
});