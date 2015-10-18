var allTestFiles = [];
var TEST_REGEXP = /(\-test)\.js$/i;

Object.keys(window.__karma__.files).forEach(function(file) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (TEST_REGEXP.test(file)) {
      allTestFiles.push(file);
    }
  }
});

require.config({
  baseUrl: '/base/public/scripts',
  paths: {
    'jquery': '../libs/jquery/dist/jquery',
    'angular': '../libs/angular/angular',
    'angularMocks': '../libs/angular-mocks/angular-mocks',
    'templates': '../../views/templates'
  },
  shim: {
    'angular': {
      deps: ['jquery'],
      exports: 'angular'
    },
    'angularMocks': {
      deps: ['angular'],
      exports: 'angular.mock'
    },
    'templates/default/author-signature.html': ['angular']
  },
  deps: allTestFiles,
  callback: window.__karma__.start
});



