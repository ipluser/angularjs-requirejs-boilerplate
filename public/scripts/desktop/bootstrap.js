GlobalConfig.requireScripts.unshift(
  'angular',
  'desktop/angular-app'
);

require(GlobalConfig.requireScripts, function (angular) {
  angular.bootstrap(document, ['angularApp']);
});




