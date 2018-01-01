var fs = require('fs');

const events = require('events');

var EventEmitter = new events.EventEmitter();

function getmore(){
    fs.readFile('mime1.json', (err,data) => {
        EventEmitter.emit('final', data);
    })
}

getmore();

EventEmitter.on('final', (data) => {
    console.log(data.toString());
})
