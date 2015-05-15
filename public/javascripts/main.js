requirejs.config({
  baseUrl: './',
  paths: {
    'jquery': 'lib/jquery-2.1.3/jquery.min',
    'angular': 'lib/angular-1.3.15/angular.min'
  },
  shim: {
    'angular': {
      deps: ['jquery'],
      exports: 'angular'
    }
  },
  waitSeconds: 0
});