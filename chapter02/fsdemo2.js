const fs = require('fs');


//read directory
fs.readdir('html', (err, data1) =>{
    if(err){
        console.log(err);
        return false;
    }
    console.log(data1);
})

//file rename a file or move a file to a different folder
fs.rename('html/t2.txt', 'html/newt2.txt', (err) => {
    if(err){
        console.log(err);
        return false ;
    }
    console.log('correct rename')
});

//delete directory
fs.rmdir('css', (err) => {
    if(err){
        console.log(err);
        return false ;
    }
    console.log('remove correctly.');
});

//delete the file
fs.unlink('t.txt', (err)=>{
    if(err){
        console.log(err);
        return false;
    }
    console.log('delete the file');
});
