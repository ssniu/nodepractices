const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');



const mime = require('./model/getmimefromfile');

//console.log(mime.getMime('.css'));  //test the mime method
mime.getMime(fs, '.css');

//create server
http.createServer((req, res) => {

    //var pathname = req.url
    var pathname = url.parse(req.url).pathname;
    console.log(pathname);

 if(pathname =='/'){
     pathname='/index.html';
 }

 //get the ext name of various types of files
var extname = path.extname(pathname);


  if(pathname != '/favicon.ico'){
      console.log(pathname);
      fs.readFile('static/' + pathname, (err,result) => {
          if(err){
              console.log('404');
              fs.readFile('static/404.html', (error, data404) => {
                  res.writeHead(200, {'Content-Type' : "text/html; charset='utf-8'"});
                  res.write(data404);
                  res.end();
              })

          }else {
              var mimeresult = mime.getMime(extname); // get the extname
              res.writeHead(200, {'Content-Type' : "" + mimeresult + ";charset='utf-8'"});
              res.write(result);
              res.end();
          }
      })
  }

}).listen(6010);
