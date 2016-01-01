define([
  'angularMocks',
  'desktop/directives/components/mock-tabs',
  'templates/components/mock-tabs.html',
  'templates/components/mock-pane.html'
], function () {
  describe('Unit: Mock-Tabs Directive', function () {
    var $compile, $rootScope;
    beforeEach(function () {
      module('angularApp');
      inject(function (_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
      });
    });

    it('should display the hello text properly', function () {
      var elt = $compile('<mock-tabs><mock-pane title="Sample">'
          + '<p>Sample Content</p>'
          + '</mock-pane></mock-tabs>'
      )($rootScope);
      $rootScope.$digest();
      expect(elt.find('a').text()).toEqual('Sample');
    });
  });
});