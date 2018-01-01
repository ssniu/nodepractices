var fs = require('fs');

//callback function to solve the async issue 
function getData(callback){
    fs.readFile('./mime1.json', (err,data) => {
        callback(data);
    })
}

getData((result) => {
    console.log(result.toString());
});
