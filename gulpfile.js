var gulp = require('gulp'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    livereload = require('gulp-livereload'),
    nodemon = require('gulp-nodemon'),
    markdown = require('gulp-markdown'),
    karmaServer = require('karma').Server;

var locals = require('./node-app/config/locals');

var paths = {
  nodeApp: 'node-app',
  middleware: 'middleware'
};

var resources = {
  images:  'public/images/**/*',
  views: 'views/**/*.html',
  scripts: 'public/scripts/**/*.js',
  libs: 'public/libs/**/*',
  styles: 'public/styles/**/*.less',
  jshint: [
    'public/scripts/**/*.js',
    paths.nodeApp + '/**/*.js',
    paths.middleware + '/**/*.js',
    'test/**/*.js'
  ],
  markdown: 'README.md'
};

require('./gulp/gulp-docker.js');

gulp.task('build-markdown', function () {
  return gulp.src(resources.markdown)
      .pipe(markdown())
      .pipe(gulp.dest('views/desktop/templates/markdown'))
      .pipe(gulp.dest('views/mobile/templates/markdown'));
});

gulp.task('jshint', function () {
  return gulp.src(resources.jshint)
      .pipe(jshint())
      .pipe(jshint.reporter(stylish));
});

gulp.task('images-reload', function () {
  return gulp.src(resources.images)
      .pipe(livereload());
});

gulp.task('karma-test', function () {
  console.log(__dirname);
  new karmaServer({
    configFile: __dirname + '/karma.conf.js'
  }).start();
});

gulp.task('start-develop', function () {
  nodemon({
    scripts: 'app.js',
    env: {
      'NODE_ENV': 'development'
    },
    ext: 'js',
    watch: [
      paths.middleware,
      paths.nodeApp,
      'app.js'
    ]
  }).on('restart', function (files) {
    gutil.log('server restarted due to: ', files);
  });

  livereload.listen();
  gulp.watch(resources.jshint, ['jshint']);
  gulp.watch(resources.images, ['images-reload']);
  gulp.watch([
    resources.scripts,
    resources.styles,
    resources.libs,
    resources.views
  ], function (file) {
    livereload.changed(file.path);
  });

  gulp.start('karma-test');
});
