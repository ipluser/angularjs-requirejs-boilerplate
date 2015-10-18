define('directives/default/author-signature', [
  'angular-app'
], function (angularApp) {
  angularApp.directive('authorSignature', function () {
    return {
      restrict: 'EA',
      scope: {
        author: '@'
      },
      replace: true,
      templateUrl: 'templates/default/author-signature'
    };
  });
});