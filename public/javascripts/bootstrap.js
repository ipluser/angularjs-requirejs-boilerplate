GlobalConfig.requireScripts.unshift('angularApp');

requirejs(GlobalConfig.requireScripts, function () {

  $(document).ready(function(){
    angular.bootstrap(document, ['angularApp']);
  });

});