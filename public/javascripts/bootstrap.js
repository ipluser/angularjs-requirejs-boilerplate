GlobalConfig.requireScripts.unshift(
  'angular',
  'angular-app'
);

requirejs(GlobalConfig.requireScripts, function (angular) {

  $(document).ready(function(){
    angular.bootstrap(document, ['angularApp']);
  });

});