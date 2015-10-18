define('filters/default/upper-case', [
  'angular-app'
], function (angularApp) {
  angularApp.filter('UpperCase', function () {
    return function (input) {
      if (!input) {
        return null;
      }

      return input.toUpperCase();
    };
  });
});