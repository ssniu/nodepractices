const http = require('http');
const tools = require('./tools.js');

var app = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'application/json'});
    res.write('hello, here');
    console.log(tools);
    //console.log(tools.tools.add(2,3));
    console.log(tools.add(2,3));
    res.end();
});

//app.listen(6002, '127.0.0.1');
app.listen(6002);
