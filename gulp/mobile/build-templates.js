var gulp = require('gulp-help')(require('gulp')),
    gutil = require('gulp-util'),
    templateCache = require('gulp-angular-templatecache'),
    size = require('gulp-size'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    replace = require('gulp-replace'),
    gulpif = require('gulp-if'),
    vp = require('vinyl-paths'),
    del = require('del');

var envUtil = require('../common/env-util');

var paths = {
  origin: 'views/mobile/templates',
  compiled: 'public/compiled/mobile/scripts'
};

gulp.task('mobile-build-templates-no-clean', function () {
  return gulp.src([
    paths.origin + '/**/*.html'
  ]).pipe(gulpif(!envUtil.isProduction(), size({title: 'mobile - template html - size'})))
      .pipe(templateCache('templates.min.js', {
        root: '/mobile/templates',
        module: 'angularApp',
        standalone: false,
        moduleSystem: 'RequireJS'
      }).on('error', gutil.log))
      .pipe(replace(/^define\(/, 'define(\'mobile/templates\'\,').on('error', gutil.log))
      .pipe(gulpif(!envUtil.isProduction(), size({title: 'mobile - template html - size - ng-html2js'})))
      .pipe(uglify().on('error', gutil.log))
      .pipe(gulpif(!envUtil.isProduction(), size({title: 'mobile - template html - size - uglify js'})))
      .pipe(gulp.dest(paths.compiled));
});

gulp.task('mobile-clean-templates', function () {
  return gulp.src([
    paths.compiled + '/templates.min.js'
  ], {
    read: false
  }).pipe(vp(del).on('error', gutil.log));
});

gulp.task('mobile-build-templates', ['mobile-clean-templates'], function () {
  gulp.start('mobile-build-templates-no-clean');
});