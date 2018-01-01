var fs = require('fs');

//async
fs.readFile('./mime1.json', (err,data) => {
    console.log(data.toString());
})


function getData(){
    fs.readFile('./mime1.json', (err,data) => {
        console.log(data.toString());
    })
}

getData();
