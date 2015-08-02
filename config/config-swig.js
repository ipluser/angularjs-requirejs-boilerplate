var systemParams = require('./system-params.json');

var locals = {
  now: function () {
    return new Date();
  },
  systemParams: systemParams
};

var configSwig = function(swig) {
  swig.setDefaults({
    locals: locals
  });
};

module.exports = configSwig;