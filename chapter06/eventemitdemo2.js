var fs = require('fs');
var events = require('events'); //events module


//console.log(events);

//create the event emitter object
var EventEmitter = new events.EventEmitter();

//receive the emitter
EventEmitter.on('to_child', (data) =>{
    console.log(data);
});

EventEmitter.on('to_parent', (data) =>{
    console.log(data);
    EventEmitter.emit('to-child', 'send data to child');
});

setTimeout(function() {
    EventEmitter.emit('to_child', 'send data')
}, 2000);
