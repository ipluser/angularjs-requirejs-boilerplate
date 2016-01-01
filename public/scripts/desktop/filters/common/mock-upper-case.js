define('desktop/filters/common/mock-upper-case', [
  'desktop/angular-app'
], function (angularApp) {
  angularApp.filter('MockUpperCase', function () {
    return function (input) {
      if (!input) {
        return null;
      }
      return input.toUpperCase();
    };
  });
});