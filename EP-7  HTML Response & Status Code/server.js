const { log } = require('console');
const http = require('http');

const fs = require('fs');

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type','text/html');

    let path = './New Folder/';

    if(req.url == '/home' || req.url == '/'){
        path += 'index.html';
        res.statusCode = 200;
    }
    else if(req.url == '/about'){
        path += 'about.html';
        res.statusCode = 200;
    }
    else if(req.url == '/contact'){
        path += 'contact.html';
        res.statusCode = 200;
    }
    else{
        path += 'notFound.html'; // but status code is still 200 means success not error so we set manually to 404
        res.statusCode = 404;
    }

    log(path)

    fs.readFile(path, (error, data) => {
        if(error){
            log(error.message);
            res.end();
        }
        else{
            // res.write(data);
            res.end(data); // if we send only one data we can give like this
        }
    })

})

server.listen(3000, 'localhost', () => {
    const port = 'http://localhost:3000/';
    log("Server listening at : ",port)
})