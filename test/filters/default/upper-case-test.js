define([
  'angularMocks',
  'filters/default/upper-case'
], function () {
  describe('Unit: UpperCase filter', function () {
    var UpperCase;
    beforeEach(function () {
      module('angularApp');
      inject(function (_$filter_) {
        UpperCase = _$filter_('UpperCase');
      });
    });

    it('should has a valueUpper filter', function () {
      expect(UpperCase).not.toBeUndefined();
    });

    it('should has a valueUpper filter that change string to upper', function () {
      var result = UpperCase('plus');
      expect(result).toEqual('PLUS');
    });

    it('should return null when input is null or nothing is set', function () {
      var result = UpperCase(null);
      expect(result).toBeNull();

      result = UpperCase();
      expect(result).toBeNull();
    });
  });
});