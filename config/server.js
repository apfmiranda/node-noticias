
module.exports = configApp;

function configApp() {
    
    var app              = require('express')();
    var consign          = require('consign');
    var bodyParser       = require('body-parser');
    var expressValidator = require('express-validator');

    // coloca o EJS como transpiler do html
    app.set('view engine', 'ejs');
    app.set('views', './app/views');
    // tranforma o recebimento de dados via url em Json
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(expressValidator());

    consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .into(app);

    return app;    
}