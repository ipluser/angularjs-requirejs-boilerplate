GlobalConfig.requireScripts.unshift(
  'angular',
  'angular-app'
);

require(GlobalConfig.requireScripts, function (angular) {
  angular.bootstrap(document, ['angularApp']);
});




