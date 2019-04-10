module.exports = function(app) {
    app.get('/create_noticia',(req, res) =>{
        res.render('admin/form_add_noticia');
    });
}