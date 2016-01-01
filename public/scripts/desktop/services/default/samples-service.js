define('desktop/services/default/samples-service', [
  'desktop/angular-app'
], function (angularApp) {
  angularApp.factory('SamplesService', function () {
    var SamplesService = {};

    SamplesService.getDesc = function () {
      return [{
        title: 'Directives',
        content: 'Directives is a unique and powerful feature available only in Angular. '
            + 'Directives let you invent new HTML syntax, specific to your application.'
      }, {
        title: 'Reusable Components',
        content: 'We use directives to create reusable components. '
            + 'A component allows you to hide complex DOM structure, CSS, and behavior. '
            + 'This lets you focus either on what the application does or how the application looks separately.'
      }, {
        title: 'Localization',
        content: 'An important part of serious apps is localization. '
            + 'Angular\'s locale aware filters and stemming directives give you building blocks to make your application available in all locales.'
      }];
    };

    return SamplesService;
  });
});