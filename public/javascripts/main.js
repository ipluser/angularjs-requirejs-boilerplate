requirejs.config({
  baseUrl: './',
  paths: {
    'jquery': 'lib/jquery-2.1.3/jquery.min',
    'angular': 'lib/angular-1.3.15/angular.min',
    'react': 'lib/react-0.13.3/react.min',
    'JSXTransformer': 'lib/react-0.13.3/JSXTransformer',
    'jsx': 'lib/react-0.13.3/jsx',
    'text': 'lib/react-0.13.3/text',
    'backstretch': 'lib/backstretch/jquery.backstretch.min'
  },
  shim: {
    'angular': {
      deps: ['jquery'],
      exports: 'angular'
    },
    'react': {
      exports: 'React'
    },
    'backstretch': ['jquery']
  },
  waitSeconds: 0
});