exports.keys = '<DETLTmJswASWtbXG>';

exports.sequelize = {
    dialect: 'mysql',
    host: 'chenmeng.zone',
    port: 3306,
    database: 'dev',
    username: 'dev',
    password: 'DETLTmJswASWtbXG',
  };

  exports.io = {
    namespace: {
      '/': {
        connectionMiddleware: ['auth'],
        packetMiddleware: ['filter'],
      },
      '/chat': {
        connectionMiddleware: ['auth'],
        packetMiddleware: ['filter']
      },
    },
  };