var fs = require('fs');

const events = require('events');

var EventEmitter = new events.EventEmitter();

//receive the emit
EventEmitter.on('to_someone', (data)=>{//to_someone is the name of event
    console.log(data);
    EventEmitter.emit('to_child', 'send data to child');
});

EventEmitter.on('to_child', (data) => {
    console.log(data);
})

setTimeout(()=>{
    console.log('send');
    EventEmitter.emit('to_someone', 'senddata');//send emit
}, 1000);


//setTimeout method emit the event "to_someone"
// then the receive emit get the same event, then do something in on method
