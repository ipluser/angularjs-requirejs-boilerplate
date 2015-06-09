GlobalConfig.requireScripts.unshift('angular');

requirejs(GlobalConfig.requireScripts, function (angular) {

  $(document).ready(function(){
    angular.bootstrap(document, ['angularApp']);
  });

});