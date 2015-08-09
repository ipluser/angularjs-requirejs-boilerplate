var systemParams = require('./system-params.json');

var locals = {
  now: function () {
    return new Date();
  },
  systemParams: systemParams
};

var configSwig = function(swig) {
  swig.setDefaults({
    cache: systemParams.isDevMode ? !systemParams.isDevMode : "memory",
    locals: locals
  });
};

module.exports = configSwig;