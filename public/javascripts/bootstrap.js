GlobalConfig.requireScripts.push('angularApp');

requirejs(GlobalConfig.requireScripts, function () {

  $(document).ready(function(){
    angular.bootstrap(document, ['angularApp']);
  });

});