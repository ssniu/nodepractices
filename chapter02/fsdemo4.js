const fs = require('fs');

//find all files and directory under  html
/*
fs.readdir('html', (err, files) => {
    if(err){
        console.log(err);
         return false;
    }else {//find out it is a file or directory
        console.log(files);
        for (var i = 0; i < files.length; i++){
            fs.stat(files[i], (err1, status) => {//async, so it is underfined
                console.log(files[i]);
            })
        }
    }

})
// this part will get the underfined result, cause it is async procress
*/

var filesArr = [];
fs.readdir('html', (err, files) => {
    if(err){
        console.log(err);
         return false;
    }else {//find out it is a file or directory
        console.log(files);
        (function getFile(i){
            if(i == files.length){
                return false;
            }

                fs.stat('html/' + files[i], (err1, status) => {//async, so it is underfined
                    console.log(files[i]);

                    if(status.isDirectory()){
                        filesArr.push(files[i]);
                    }
                    getFile(i+1);
                })
        })(0)


    }

})
