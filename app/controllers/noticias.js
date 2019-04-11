module.exports.noticia = function(app, req, res){
    var connection = app.config.dbConnection.getPool();
    var noticiasModel = app.app.models.NoticiasModel;
    
    noticiasModel.getNoticia(connection,(error, result) => {
        console.log(result);
        res.render('noticias/noticia', {noticia: result});
    })
}

module.exports.noticias = function(app, req, res){
    var connection = app.config.dbConnection.getPool();
    var noticiasModel = app.app.models.NoticiasModel;

    noticiasModel.getNoticias(connection,(error, result) => {        
        res.render('noticias/noticias', {noticias: result});        
    });  
}