exports.getMime = function(fs,extname) {
    //async -- when calling it, the result will be undefined firstly
    /*fs.readFile('./mime.json', (err, data) => {
        if(err) {
            console.log('not found the file');
            return false;
        }

        console.log(data.toString());

        var Mimes = JSON.parse(data.toString());
        //console.log(Mimes[extname]);//return the extname
        //if the type is unknown
        return Mimes[extname] || 'text/html';
    })*/



//solution to solve the async issue
//sync to solve it
var data = fs.readFileSync('./mime.json');
var Mimes = JSON.parse(data.toString());
return Mimes[extname] || 'text/html';


}
