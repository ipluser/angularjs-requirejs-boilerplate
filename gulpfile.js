var gulp = require('gulp'),
    less = require('gulp-less'),
    minifyCss = require('gulp-minify-css'),
    rjsOptimizer = require('gulp-requirejs2'),
    uglify = require('gulp-uglify'),
    clean = require('gulp-clean');

var baseScriptsPath = 'public/javascripts/',
    baseStylesPath = 'public/styles/',
    compiledPath = 'public/compiled/';

gulp.task('buildStyles', function() {
  return gulp.src([
    baseStylesPath + '**/*',
    '!' + baseStylesPath + 'libs/**/*'
  ]).pipe(less())
      .pipe(minifyCss())
      .pipe(gulp.dest(compiledPath + 'styles'));
});

gulp.task('buildScripts', function() {
  gulp.src(baseScriptsPath + "libs/**/*.js")
      .pipe(uglify())
      .pipe(gulp.dest(compiledPath + 'javascripts/libs'));

  rjsOptimizer({
    baseUrl: baseScriptsPath,
    mainConfigFile: baseScriptsPath + 'main.js',
    removeCombined: true,
    stubModules: ['jsx', 'text', 'JSXTransformer'],
    name: 'build-main',
    out: 'apps.min.js'
  }).pipe(uglify())
      .pipe(gulp.dest(compiledPath + 'javascripts'));
});

gulp.task('clean', function() {
  return gulp.src(compiledPath + '*', {
    read: false
  }).pipe(clean());
});

gulp.task('default', ['clean'], function() {
  gulp.start(['buildStyles', 'buildScripts']);
});