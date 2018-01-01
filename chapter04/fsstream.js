const fs = require('fs');

//read the stream
var readStream = fs.createReadStream('input.txt');

var str = '';//store the data
var count=0; // count the times of read stream

readStream.on('data', (chunk) => {
    str += chunk;
    count++;
})

//read the data complete
readStream.on('end', function(chunk) {
    console.log(str);
    console.log(count);
})

//error happens
readStream.on('error', (error) => {
    console.log('error');
})


//write the stream
var mydata = 'These so-called hotspots, for example Hawaii,\n' +
'are postulated to arise from upwelling diapirs with magma from the core–mantle\n'+
'boundary, 3,000 km deep in the Earth. Volcanoes are usually not created where\n'
;

//create the write stream
var writerStream = fs.createWriteStream('out.txt');

for(var i =0; i < 10; i++){
    writerStream.write(mydata);
}


writerStream.end(); //the end of write stream
writerStream.on('finish', () => {
    console.log('write is done');
})

//error happens
writerStream.on('error', (err1) => {
    console.log(err1);
})
