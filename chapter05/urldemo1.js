const http = require('http');
const fs = require('fs');

//create server
http.createServer((req, res) => {

    var pathname = req.url

 if(pathname =='/'){
     pathname='/index.html';
 }
  if(pathname != '/favicon.ico'){
      console.log(pathname);
      fs.readFile('static/' + pathname, (err,result) => {
          if(err){
              console.log('404');

          }else {
              res.writeHead(200, {'Content-Type' : 'application/json'});
              res.write(result);
              res.end();
          }
      })
  }
    
}).listen(6010);
