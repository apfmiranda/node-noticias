module.exports = function(app) {
    app.get('/create_noticia',(req, res) =>{
        res.render('admin/form_add_noticia');
    });

    app.post('/noticias/salvar',(req, res) =>{
        var noticia =  req.body;

        var connection = app.config.dbConnection.getPool();
        var noticiasModel =  app.app.models.NoticiasModel;

        noticiasModel.salvarNoticia(noticia, connection,(error, result) => {
            res.redirect('/noticias');
        });
    });
}