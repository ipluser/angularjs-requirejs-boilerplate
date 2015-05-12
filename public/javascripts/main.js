require.config({
  baseUrl: './',
  paths: {
    'jquery': 'lib/jquery-2.1.3/jquery.min',
    'angular': 'lib/angular-1.3.15/angular.min',
    'angular-ui-router': 'lib/angular-ui-router-0.2.14/angular-ui-router.min',
    'jquery.fullscreenBackground': 'lib/jquery.fullscreenBackground/jquery.fullscreenBackground'
  },
  shim: {
    'angular': {
      deps: ['jquery'],
      exports: 'angular'
    },
    'angular-ui-router': ['angular'],
    'jquery.fullscreenBackground': ['jquery']
  },
  waitSeconds: 0
});

require(['angularApp'], function () {

  require(GlobalConfig.requireScripts, function() {
    $(document).ready(function(){
      angular.bootstrap(document, ['angularApp']);
    });
  })
});