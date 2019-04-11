module.exports.index = function(app, req, res){
    var connection = app.config.dbConnection.getPool();
    var noticiasModel =  app.app.models.NoticiasModel;

    noticiasModel.getLastNoticias(connection, 5, (error, result) => {
        res.render('home/index', {noticias: result});
    });  
}