GlobalConfig.requireScripts.unshift(
  'angular',
  'angularApp'
);

requirejs(GlobalConfig.requireScripts, function (angular) {

  $(document).ready(function(){
    angular.bootstrap(document, ['angularApp']);
  });

});