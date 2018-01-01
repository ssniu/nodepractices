var fs = require('fs');
var events = require('events'); //events module


console.log(events);

//create the event emitter object
var EventEmitter = new events.EventEmitter();

//receive the emitter
EventEmitter.on('to_parent', () =>{
    console.log('received the emit ');
});

setTimeout(function() {
    EventEmitter.emit('to_parent', 'send data');
}, 2000);
