
//get the http module
const http = require('http');
//get the url module
const url = require('url');


http.createServer((req, res) => {

    //console.log(req.url); // get the url information
    //console.log(url.parse(req.url, true));
    if(req.url != '/favicon.ico'){
        var result = url.parse(req.url, true);
        console.log(result.query.myid + 'your id is' + result.query.urid);
    }
    res.writeHead(200, {"Content-Type": "application/json"});//set the http request header
    res.write('hello, i am the fake nodejs, haha');//output the content
    res.end(); //end the server
}).listen(6001);
