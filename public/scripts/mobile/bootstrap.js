GlobalConfig.requireScripts.unshift(
  'angular',
  'mobile/angular-app'
);

require(GlobalConfig.requireScripts, function (angular) {
  angular.bootstrap(document, ['angularApp']);
});




