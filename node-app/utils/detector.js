var MobileDetect = require('mobile-detect');

var Detector = {};

Detector.isMobile = function (userAgent) {
  var mobileDetect = new MobileDetect(userAgent);

  if (mobileDetect.mobile() && !mobileDetect.tablet()) {
    return true;
  }
  return false;
};

module.exports = Detector;