
module.exports = configApp;

function configApp() {
    
    var app = require('express')();
    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    var consign = require('consign');
 
    consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .into(app);

    return app;    
}