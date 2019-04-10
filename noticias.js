const http = require('http');
var hostname = 'localhost';
const port = 3000;



const server = http.createServer((req, res) => {
    var categoria  = req.url;
    console.log(categoria);

    if (categoria == '/tecnologia') {
        res.end('<html><body>Noticias de Tecnologia</body></html>');        
    } else if (categoria == '/moda') {
        res.end('<html><body>Noticias de Moda</body></html>');        
    } else if (categoria == '/beleza') {
        res.end('<html><body>Noticias de Beleza</body></html>');        
    } else {
        res.end('<html><body>Portal de notícias</body></html>');    
    }    
});

server.listen(port, () => {
    console.log(`server listening on host: ${hostname} port: ${port}`);
});