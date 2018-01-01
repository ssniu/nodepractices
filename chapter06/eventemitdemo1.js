var fs = require('fs');
// 引入 events 模块

var events=require('events');

//console.log(events);

var EventEmitter=new events.EventEmitter();

//广播 和接收广播

EventEmitter.on('to_mime',function(data){

    console.log(data);

})

//监听to_parent的广播
EventEmitter.on('to_parent',function(data){
    //console.log('接收到了这个广播事件');

    console.log(data);

    EventEmitter.emit('to_mime','给mime发送的数据')

})

setTimeout(function(){
    console.log('开始广播...');
    //广播to_parent事件
    EventEmitter.emit('to_parent','发送的数据')

},1000);
