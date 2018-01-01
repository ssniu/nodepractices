const fs = require('fs');

//make sure the upload directory exists
fs.stat('upload', (err, status) => {
    if(err){
        //console.log(err);
        //return false ;
        fs.mkdir('upload', (err1) =>{
            if(err1){
                console.log(err1);
                return false;
            }
            console.log('upload directory is there');
        });
    }else {
        console.log(status.isDirectory());
    }

})
