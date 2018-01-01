//get the http module
var http = require('http');

//create server
http.createServer( (req, res) => {
    //console.log('get the request' + req.url);
    res.writeHead(200, {"Content-Type": "application/json"});//set the http header
    res.write('hello, node js');//output the result
    res.end(); //end the server
}).listen(8001);// port 
