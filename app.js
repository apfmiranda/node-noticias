var app = require('./config/server')();
const hostname = 'localhost';
const port = 3000;

app.listen(port, () => {
    console.log(`server listening on host: ${hostname} port: ${port}`);
});