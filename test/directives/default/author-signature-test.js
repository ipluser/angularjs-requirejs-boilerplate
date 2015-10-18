define([
  'angularMocks',
  'directives/default/author-signature',
  'templates/default/author-signature.html'
], function () {
  describe('Unit: Author-Signature Directive', function () {
    var $compile, $rootScope;
    beforeEach(function () {
      module('angularApp');
      inject(function (_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
      });
    });

    it('should display the hello text properly', function () {
      var elt = $compile('<author-signature author="Plus"></author-signature>')($rootScope);
      $rootScope.$digest();
      expect(elt.text()).toEqual('Plus');
    });
  });
});