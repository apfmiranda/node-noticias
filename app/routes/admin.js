module.exports = function(app) {
    app.get('/create_noticia',(req, res) =>{
        app.app.controllers.admin.create_noticia(app, req, res);
    });

    app.post('/noticias/salvar',(req, res) =>{
        app.app.controllers.admin.noticias_salvar(app, req, res);
    });
}