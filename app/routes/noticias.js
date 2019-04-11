module.exports = function(app) {
    
    app.get('/noticias',(req, res) =>{
        var connection = app.config.dbConnection.getPool();
        var noticiasModel = app.app.models.NoticiasModel;

        noticiasModel.getNoticias(connection,(error, result) => {
            res.render('noticias/noticias', {noticias: result});
        });        
    });
}