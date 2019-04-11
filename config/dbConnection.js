var mysql = require('mysql');
var logger = require('../app/util/logger').getInstance();
var qtdConnections = 0;

var pool;
module.exports = {
    getPool: function () {
      if (pool) return pool;
      
      qtdConnections = qtdConnections + 1;
      logger.info('Conexão número = ' + qtdConnections + '  criada.');
      pool = mysql.createPool({
        hot: 'localhost',
        user: 'root',
        password : '123456',
        database: 'portal_noticias'
      });
      return pool;
    }
};