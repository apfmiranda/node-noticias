class NoticiasModel {
    getNoticias(connection, callBack) {
        connection.query('select * from noticias', callBack);
    };

    getNoticia(connection, callBack) {
        connection.query('select * from noticias where id_noticia = 1', callBack);
    };

    salvarNoticia(noticia, connection, callBack) {
        connection.query('insert into noticias set ?', noticia, callBack);
    };
}

module.exports =  new NoticiasModel();