var logger = require('../util/logger').getInstance();

class NoticiasModel {

    getLastNoticias(connection, qtdNoticias, callBack){
        connection.query('SELECT * FROM noticias order by data_criacao desc limit ' + qtdNoticias, callBack);
    }

    getNoticias(connection, callBack) {
        connection.query('select * from noticias order by data_criacao desc', callBack);
    };

    getNoticia(id,connection, callBack) {
        connection.query('select * from noticias where id_noticia = '+ id.id_noticia, callBack);
    };

    salvarNoticia(noticia, connection, callBack) {
        connection.query('insert into noticias set ?', noticia, callBack);
    };
}

module.exports =  new NoticiasModel();