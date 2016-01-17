var gulp = require('gulp-help')(require('gulp')),
    gutil = require('gulp-util'),
    templateCache = require('gulp-angular-templatecache'),
    size = require('gulp-size'),
    uglify = require('gulp-uglify'),
    replace = require('gulp-replace'),
    gulpif = require('gulp-if'),
    vp = require('vinyl-paths'),
    del = require('del');

var envUtil = require('../common/env-util');

var paths = {
  origin: 'views/desktop/templates',
  compiled: 'public/compiled/desktop/scripts'
};

gulp.task('desktop-build-templates-no-clean', function () {
  return gulp.src([
    paths.origin + '/**/*.html'
  ]).pipe(gulpif(!envUtil.isProduction(), size({title: 'desktop - template html - size'})))
      .pipe(templateCache('templates.min.js', {
        root: '/desktop/templates',
        module: 'angularApp',
        standalone: false,
        moduleSystem: 'RequireJS'
      }).on('error', gutil.log))
      .pipe(replace(/^define\(/, 'define(\'desktop/templates\'\,').on('error', gutil.log))
      .pipe(gulpif(!envUtil.isProduction(), size({title: 'desktop - template html - size - ng-html2js'})))
      .pipe(uglify().on('error', gutil.log))
      .pipe(gulpif(!envUtil.isProduction(), size({title: 'desktop - template html - size - uglify js'})))
      .pipe(gulp.dest(paths.compiled));
});

gulp.task('desktop-clean-templates', function () {
  return gulp.src([
    paths.compiled + '/templates.min.js'
  ], {
    read: false
  }).pipe(vp(del).on('error', gutil.log));
});

gulp.task('desktop-build-templates', ['desktop-clean-templates'], function () {
  gulp.start('desktop-build-templates-no-clean');
});