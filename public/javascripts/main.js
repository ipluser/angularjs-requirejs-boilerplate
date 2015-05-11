require.config({
  baseUrl: './',
  paths: {
    'jquery': 'lib/jquery-2.1.3/jquery.min',
    'angular': 'lib/angular-1.3.15/angular.min',
    'jquery.fullscreenBackground': 'lib/jquery.fullscreenBackground/jquery.fullscreenBackground'
  },
  shim: {
    'angular': {
      deps: ['jquery'],
      exports: 'angular'
    },
    'angular-ui-router': ['angular']
  }
});

require(['angular'], function (angular) {

  var app = angular.module('app', []);

  define('app', function() {
    return app;
  });

  angular.bootstrap(document, ['app']);
});