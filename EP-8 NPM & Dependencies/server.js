const { log } = require('console');
const fs = require('fs');
const http = require('http');
const _ = require('lodash');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html')
    res.write('<h2>Hello Aswath</h2>');
    res.end();
})

server.listen(3000, 'localhost', () => {
    const port = 'http://localhost:3000/';
    log('listening at : ',port);

    log(_.random(1,10)); // generate random num using lodash dependencies
})