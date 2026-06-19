const { log } = require('console');
const http = require('http');

const server = http.createServer((req, res) => { // 2 parameter to passed for callback fun (req, res)
    log("Request made ❤️");
    log(req.url); // req.url - to know which url user wants to go
    log(req.method); // req.method - to know which ttype of method (get,post...)

    //res.setHeader('Content-Type', 'text/plain'); // setHeader - it is importtant to know what res the browser is getting
    res.setHeader('Content-Type','text/html');
    res.write('<h2>Hello World !!</h2>');
    // res.write('Hello World !!'); // write the content
    
    res.end(); // lastly end then only res is go to browser

})

server.listen(3000, 'localhost', () => {
    const port = 'http://localhost:3000/';
    log("Server listening at : ",port)
})

 // When we got to this url then only "Request made" prints bcoz then only req was made.