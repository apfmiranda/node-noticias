var mysql = require('mysql');
var logger = require('../app/util/logger');

var connMysql = function() {
    
    logger.info('Conexão DB criada.');
    return mysql.createConnection({
        hot: 'localhost',
        user: 'root',
        password : '123456',
        database: 'portal_noticias'
    });
}
  
module.exports = function (){    
    return connMysql;
};
