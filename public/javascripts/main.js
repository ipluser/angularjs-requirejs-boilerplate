requirejs.config({
  baseUrl: '/',
  paths: {
    'jquery': '../libs/jquery/dist/jquery.min',
    'angular': '../libs/angular/angular.min',
    'React': '../libs/react/react.min',
    'JSXTransformer': '../libs/react/JSXTransformer',
    'jsx': '../libs/jsx-requirejs-plugin/js/jsx',
    'text': '../libs/requirejs-text/text',
    'jquery-backstretch': '../libs/jquery-backstretch/jquery.backstretch.min'
  },
  shim: {
    'angular': {
      deps: ['jquery'],
      exports: 'angular'
    },
    'React': {
      exports: 'React'
    },
    'jquery-backstretch': ['jquery']
  },
  waitSeconds: 0
});