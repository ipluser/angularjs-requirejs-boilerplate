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
  origin: 'public/styles/desktop',
  compiled: 'public/compiled/desktop/styles'
};

gulp.task('desktop-build-styles-no-clean', function () {
  return gulp.src(paths.origin + '/**/*.less')
      .pipe(plumber())
      .pipe(gulpif(!envUtil.isProduction(), size({title: 'size of less in desktop'})))
      .pipe(less().on('error', gutil.log))
      .pipe(gulpif(!envUtil.isProduction(), size({title: 'size of css in desktop, after less2css'})))
      .pipe(minifycss().on('error', gutil.log))
      .pipe(gulpif(!envUtil.isProduction(), size({title: 'size of css in desktop, after minify css'})))
      .pipe(gulp.dest(paths.compiled))
      .pipe(gulpif(envUtil.isLiveReload(), browserSync.stream()));
});

gulp.task('desktop-clean-styles', function () {
  return gulp.src(paths.compiled, {
    read: false
  }).pipe(vp(del).on('error', gutil.log));
});

gulp.task('desktop-build-styles', ['desktop-clean-styles'], function () {
  gulp.start('desktop-build-styles-no-clean');
});