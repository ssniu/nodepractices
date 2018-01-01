//get the http module
var http = require('http');
// require url module
var url = require('url');

//create server
http.createServer( (req, res) => {
    //console.log(req.url);//req.url get the data from browser
    //req.url -- url address, true converts the value to an object
    //ignore the favicon.ico
    if(req.url != '/favicon.ico'){
        var result=url.parse(req.url, true);//convert the get value to object via true
        console.log(result);
        console.log(result.query.aid + ' and ' + result.query.cid);// get the aid value from the query inside the result
    }

    //console.log('get the request' + req.url);
    res.writeHead(200, {"Content-Type": "application/json"});
    res.write('hello, node js');
    res.end(); //end the server
}).listen(8001);
