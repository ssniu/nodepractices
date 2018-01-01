const fs = require('fs');

//find out whether a file or directory
fs.stat('html', (err, status) => {
    if(err) {
        console.log(err);

        return false;
    }

    console.log('file ' + status.isFile());
    console.log('file ' + status.isDirectory());
});

//create a directory
fs.mkdir('css', (err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log('successfully');
})
//path: directory path
//mode write/read default 0777
//callback --err


//create a file, if the file exists, rewrite the file with new content
fs.writeFile('t.txt', 'this is the content  for t.txt', (err) => {
    if(err){
        console.log(err);
        return false;
    }
    console.log('wirte a new file');
});


//if file exists, add new file
fs.appendFile('t1.txt', 'content for t1.txt file', (err) => {
    if(err){
        console.log(err);
        return false;
    }
    console.log('write the new content.');
})


//read the file
fs.readFile('t.txt', (err, data) => {
    if(err){
        console.log(err);
        return false;
    }
    //console.log(data);
    console.log(data.toString());
});

//read directory
fs.readdir('html', (err, data1) =>{
    if(err){
        console.log(err);
        return false;
    }
    console.log(data1);
})
