var gulp = require('gulp-help')(require('gulp')),
    gutil = require('gulp-util'),
    nodemon = require('gulp-nodemon'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    karmaServer = require('karma').Server;

var envUtil = require('../common/env-util'),
    browserSync = require('./build-browser-sync');

var resources = {
  styles: 'public/styles/**/*.less',
  scripts: 'public/scripts/**/*.js',
  libs: 'public/libs/**/*.js',
  jshint: [
    'public/scripts/**/*.js',
    'node-app/**/*.js',
    'middleware/**/*.js',
    'test/**/*.js'
  ],
  views: 'views/**/*.html',
  images: 'public/images/**/*'
};

gulp.task('develop-watch', [
  'develop-watch-node',
  'build-styles'
], function () {
  gulp.watch(resources.styles, ['build-styles']);
  gulp.watch(resources.scripts, ['browsersync-reload']);
  gulp.watch(resources.libs, ['browsersync-reload']);
  gulp.watch(resources.jshint, ['develop-jshint']);
  gulp.watch(resources.views, ['browsersync-reload']);
  gulp.watch(resources.images, ['browsersync-reload']);
});

gulp.task('develop-watch-node', function () {
  nodemon({
    scripts: 'app.js',
    env: {
      'NODE_ENV': 'development'
    },
    ext: 'js',
    watch: [
      'middleware',
      'node-app',
      'app.js'
    ]
  }).on('restart', function (files) {
    gutil.log('Node server restarted due to: ', files);
  });
});

gulp.task('browsersync-reload', function () {
  if (envUtil.isLiveReload()) {
    browserSync.reload();
  }
});

gulp.task('develop-jshint', function () {
  return gulp.src(resources.jshint)
      .pipe(jshint())
      .pipe(jshint.reporter(stylish));
});

gulp.task('develop-tests', function () {
  new karmaServer({
    configFile: process.cwd() + '/karma.conf.js'
  }).start();
});