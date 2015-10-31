module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'requirejs'],
    files: [
      {pattern: 'public/libs/jquery/dist/jquery.js', included: false},
      {pattern: 'public/libs/angular/angular.js', included: false},
      {pattern: 'public/libs/angular-mocks/angular-mocks.js', included: false},
      {pattern: 'public/scripts/**/*.js', included: false},
      {pattern: 'views/templates/**/*.html', included: false},
      {pattern: 'test/**/*-test.js', included: false},
      'test/test-main.js'
    ],
    exclude: [
      'public/scripts/build-main.js',
      'public/scripts/require-config.js',
      'public/scripts/bootstrap.js'
    ],
    browsers: ['PhantomJS_Custom'],
    customLaunchers: {
      'PhantomJS_Custom': {
        base: 'PhantomJS',
        options: {
          windowName: 'karma-phantom',
          settings: {
            webSecurityEnabled: false
          },
        },
        debug: true
      }
    },
    phantomjsLauncher: {
      exitOnResourceError: true
    },
    reporters: ['progress', 'html', 'coverage'],
    htmlReporter: {
      outputFile: 'report/units.html',
      pageTitle: 'Unit Tests',
      subPageTitle: 'Unit tests with karma jasmine'
    },
    preprocessors: {
      'public/scripts/**/*.js': ['coverage'],
      'views/templates/**/*.html' : ['ng-html2js']
    },
    coverageReporter: {
      type : 'html',
      dir : 'report/coverage/'
    },
    ngHtml2JsPreprocessor: {
      stripPrefix: 'views/',
      moduleName: 'angularApp'
    }
  });
}