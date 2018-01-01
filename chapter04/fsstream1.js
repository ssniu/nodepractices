const fs = require('fs');

//read the stream
var readStream = fs.createReadStream('input2.txt');

//write the stream
var writerStream = fs.createWriteStream('output.txt');

//pipe write. read the file and  then write it to another file
readStream.pipe(writerStream);

console.log('the end!');
