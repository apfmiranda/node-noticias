module.exports = function(app) {
    
    app.get('/noticia',(req, res) =>{
        var connection = app.config.dbConnection.getPool();
        var noticiasModel = app.app.models.NoticiasModel;
        
        noticiasModel.getNoticia(connection,(error, result) => {
            res.render('noticias/noticia', {noticia: result});
        })
        
    });
}