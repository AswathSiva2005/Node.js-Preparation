const { log } = require('console');
const http = require('http');

const server = http.createServer((req, res) => { // 2 parameter to passed for callback fun (req, res)
    log("Request made ❤️");
})

server.listen(3000, 'localhost', () => {
    const port = 'http://localhost:3000/';
    log("Server listening at : ",port)
})

 // When we got to this url then only "Request made" prints bcoz then only req was made.