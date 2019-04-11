var logger = require('../util/logger').getInstance();

class NoticiasModel {

    getLastNoticias(connection, qtdNoticias, callBack){
        connection.query('SELECT * FROM noticias order by data_criacao desc limit ' + qtdNoticias, callBack);
    }

    getNoticias(connection, callBack) {
        connection.query('select * from noticias', callBack);
    };

    getNoticia(connection, callBack) {
        connection.query('select * from noticias where id_noticia = 1', callBack);
    };

    salvarNoticia(noticia, connection, callBack) {
        logger.log(noticia.body);
        connection.query('insert into noticias set ?', noticia, callBack);
    };
}

module.exports =  new NoticiasModel();