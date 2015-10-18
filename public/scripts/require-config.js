require.config({
  baseUrl: '/static/scripts',
  paths: {
    'jquery': '../libs/jquery/dist/jquery',
    'angular': '../libs/angular/angular'
  },
  shim: {
    'angular': {
      deps: ['jquery'],
      exports: 'angular'
    }
  },
  priority: ['angular'],
  waitSeconds: 0
});



