module.exports = function(app) {
    app.get('/create_noticia',(req, res) =>{
        res.render('admin/form_add_noticia');
    });

    app.post('/noticias/salvar',(req, res) =>{
        var noticia =  req.body;

        req.assert('titulo', 'Titulo é obrigatório!').notEmpty();
        req.assert('resumo', 'Resumo é obrigatório!').notEmpty();
        req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres!').len(10,100);
        req.assert('autor', 'Autor é obrigatório!').notEmpty();
        req.assert('data_noticia', 'Data dos fatos é obrigatória!').notEmpty().isDate({format: 'YYYY-MM-DD'});
        req.assert('noticia', 'Noticia é obrigatória!').notEmpty();

        var error = req.validationErrors();

        if (error) {
            res.render('admin/form_add_noticia');
            return;
        }

        var connection = app.config.dbConnection.getPool();
        var noticiasModel =  app.app.models.NoticiasModel;

        noticiasModel.salvarNoticia(noticia, connection,(error, result) => {
            res.redirect('/noticias');
        });
    });
}