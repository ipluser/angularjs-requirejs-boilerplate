module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'requirejs'],
    files: [
      {pattern: 'public/libs/jquery/dist/jquery.js', included: false},
      {pattern: 'public/libs/angular/angular.js', included: false},
      {pattern: 'public/libs/angular-mocks/angular-mocks.js', included: false},
      {pattern: 'public/scripts/**/*.js', included: false},
      {pattern: 'views/desktop/templates/**/*.html', included: false},
      {pattern: 'views/mobile/templates/**/*.html', included: false},
      {pattern: 'test/**/*-test.js', included: false},
      'test/desktop/test-main.js'
    ],
    exclude: [
      'public/scripts/desktop/bootstrap.js',
      'public/scripts/desktop/optimize-main.js',
      'public/scripts/desktop/optimize-require-config.js',
      'public/scripts/desktop/require-config.js',
      'public/scripts/mobile/bootstrap.js',
      'public/scripts/mobile/optimize-main.js',
      'public/scripts/mobile/optimize-require-config.js',
      'public/scripts/mobile/require-config.js'
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
      'views/desktop/templates/**/*.html' : ['ng-html2js'],
      'views/mobile/templates/**/*.html' : ['ng-html2js']
    },
    coverageReporter: {
      type : 'html',
      dir : 'report/coverage/'
    },
    ngHtml2JsPreprocessor: {
      stripPrefix: 'views',
      moduleName: 'angularApp'
    }
  });
}