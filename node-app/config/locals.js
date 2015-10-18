var locals = {
  isDevMode: false,
  port: 8099,
  poweredBy: 'pluser',
  SSL: {
    enableSSL: false,
    key: './node-app/config/ssl/key.pem',
    cert: './node-app/config/ssl/cert.pem'
  },
  cachePeriod: 604800000,
  buildNumber: new Date().getTime().toString(),
  logPath: '/var/log/nodejs/'
};

module.exports = locals;