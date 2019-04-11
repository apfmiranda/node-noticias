
module.exports = configApp;

function configApp() {
    
    var express          = require('express');
    var consign          = require('consign');
    var bodyParser       = require('body-parser');
    var expressValidator = require('express-validator');

    var app = express();

    // coloca o EJS como transpiler do html
    app.set('view engine', 'ejs');
    app.set('views', './app/views');
    
    app.use(express.static('./app/public'));
    // tranforma o recebimento de dados via url em Json
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(expressValidator());

    consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/controllers')
    .then('app/models')
    .into(app);

    return app;    
}