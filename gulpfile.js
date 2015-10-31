var gulp = require('gulp'),
    gutil = require('gulp-util'),
    less = require('gulp-less'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    requirejs = require('requirejs'),
    vp = require('vinyl-paths'),
    del = require('del'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    livereload = require('gulp-livereload'),
    nodemon = require('gulp-nodemon'),
    templateCache = require('gulp-angular-templatecache'),
    size = require('gulp-size'),
    karmaServer = require('karma').Server;

var locals = require('./node-app/config/locals');

var paths = {
  styles: {
    origin: 'public/styles',
    compiled: 'public/compiled/styles'
  },
  scripts: {
    origin: 'public/scripts',
    compiled: 'public/compiled/scripts'
  },
  libs: 'public/libs',
  images: 'public/images',
  views: 'views',
  nodeApp: 'node-app',
  middleware: 'middleware',
  test: 'test'
}, resources = {
  jshint: [
    paths.scripts.origin + '/**/*.js',
    paths.nodeApp + '/**/*.js',
    paths.middleware + '/**/*.js',
    paths.test + '/**/*.js'
  ]
};

gulp.task('jshint', function () {
  return gulp.src(resources.jshint)
      .pipe(jshint())
      .pipe(jshint.reporter(stylish));
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
  gulp.watch(paths.images + '/**/*', ['images-reload']);
  gulp.watch([
    paths.scripts.origin + '/**/*.js',
    paths.styles.origin + '/**/*.less',
    paths.libs + '/**/*.js',
    paths.views + '/**/*.html'
  ], function (file) {
    livereload.changed(file.path);
  });

  gulp.watch(resources.jshint, ['jshint']);

  new karmaServer({
    configFile: __dirname + '/karma.conf.js'
  }).start();
});

gulp.task('images-reload', function () {
  return gulp.src(paths.images + '/**/*')
      .pipe(livereload());
});

gulp.task('build-styles', function () {
  return gulp.src(paths.styles.origin + '/**/*.less')
      .pipe(size({
        title: 'less'
      }))
      .pipe(less().on('error', gutil.log))
      .pipe(size({
        title: 'less2css'
      }))
      .pipe(minifycss().on('error', gutil.log))
      .pipe(size({
        title: 'minifycss'
      }))
      .pipe(gulp.dest(paths.styles.compiled));
});

gulp.task('build-libs', function () {
  requirejs.optimize({
    baseUrl: paths.scripts.origin,
    name: 'build-main',
    mainConfigFile: paths.scripts.origin + '/require-config.js',
    out: paths.scripts.compiled + '/libs.min.js',
    optimize: 'uglify2',
    removeCombined: true
  }, function (data) {
    if (locals.isDevMode) {
      gutil.log('text output of the modules included in requirejs optimize: ', data);
    }
  }, function (err) {
    gutil.log('requirejs optimize error: ', err);
  });
});

gulp.task('build-scripts', function () {
  return gulp.src([
    paths.scripts.origin + '/**/*.js',
    '!' + paths.scripts.origin + '/build-main.js'
  ]).pipe(concat('apps.min.js').on('error', gutil.log))
      .pipe(size({
        title: 'apps.js'
      }))
      .pipe(uglify().on('error', gutil.log))
      .pipe(size({
        title: 'apps.min.js'
      }))
      .pipe(gulp.dest(paths.scripts.compiled));
});

gulp.task('build-views', function () {
  return gulp.src(paths.views + '/templates/**/*.html')
      .pipe(size({
        title: 'templates html'
      }))
      .pipe(templateCache('templates.min.js', {
        root: 'templates',
        module: 'angularApp',
        standalone: false,
        moduleSystem: 'RequireJS'
      }))
      .pipe(size({
        title: 'ng-html2js'
      }))
      .pipe(uglify().on('error', gutil.log))
      .pipe(size({
        title: 'templates.min.js'
      }))
      .pipe(gulp.dest(paths.scripts.compiled));
});

gulp.task('clean', function () {
  return gulp.src('public/compiled', {
    read: false
  }).pipe(vp(del).on('error', gutil.log));
});

gulp.task('default', ['clean'], function () {
  gulp.start('build-styles', 'build-libs', 'build-scripts', 'build-views');
});