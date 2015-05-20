requirejs.config({
  baseUrl: './',
  paths: {
    'jquery': 'lib/jquery-2.1.3/jquery.min',
    'angular': 'lib/angular-1.3.15/angular.min',
    'JSXTransformer': 'lib/react-0.13.3/JSXTransformer',
    'react': 'lib/react-0.13.3/react-with-addons.min'
  },
  shim: {
    'angular': {
      deps: ['jquery'],
      exports: 'angular'
    },
    'react': {
      exports: 'React'
    },
    jsx: {
      fileExtension: '.js',
      harmony: true,
      stripTypes: true
    }
  },
  waitSeconds: 0
});