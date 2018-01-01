var fs = require('fs');

const events = require('events');

var EventEmitter = new events.EventEmitter();

function getData(){
    fs.readFile('mime.json', (err, data) => {
        EventEmitter.emit('data', data);
    })
}

getData();

EventEmitter.on('data',(result) => {
    console.log(result.toString());
})
