requirejs.config({
  baseUrl: './',
  paths: {
    'jquery': 'libs/jquery-2.1.3/jquery.min',
    'angular': 'libs/angular-1.3.15/angular.min',
    'React': 'libs/react-0.13.3/react.min',
    'JSXTransformer': 'libs/react-0.13.3/JSXTransformer',
    'jsx': 'libs/react-0.13.3/jsx',
    'text': 'libs/react-0.13.3/text',
    'backstretch': 'libs/backstretch/jquery.backstretch.min'
  },
  shim: {
    'angular': {
      deps: ['jquery'],
      exports: 'angular'
    },
    'React': {
      exports: 'React'
    },
    'backstretch': ['jquery']
  },
  waitSeconds: 0
});