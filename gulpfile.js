require('./gulp/gulp-docker');

var gulp = require('gulp-help')(require('gulp')),
    markdown = require('gulp-markdown');

gulp.task('build-markdown', function () {
  return gulp.src('README.md')
      .pipe(markdown())
      .pipe(gulp.dest('views/desktop/templates/markdown'))
      .pipe(gulp.dest('views/mobile/templates/markdown'));
});