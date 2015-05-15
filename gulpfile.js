var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css'),
    clean = require('gulp-clean'),
    jshint = require('gulp-jshint');

gulp.task('compressScripts', function() {
  return gulp.src('public/javascripts/**/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('public/compiled/javascripts'));
});

gulp.task('compressStyles', function() {
  return gulp.src('public/styles/**/*.css')
      .pipe(minifyCss())
      .pipe(gulp.dest('public/compiled/styles'));
});

gulp.task('clean', function() {
  return gulp.src('public/compiled/*', {
    read: false
  }).pipe(clean());
});

gulp.task('jshint', function() {
  return gulp.src('public/javascripts/**/*.js')
      .pipe(jshint())
      .pipe(jshint.reporter('default'));
});

gulp.task('default', ['clean', 'jshint'], function() {
  gulp.start(['compressScripts', 'compressStyles']);
});