require.config({
  paths: {
    'jquery': '../libs/jquery/dist/jquery',
    'angular': '../libs/angular/angular'
  },
  shim: {
    'angular': {
      deps: ['jquery'],
      exports: 'angular'
    }
  }
});



