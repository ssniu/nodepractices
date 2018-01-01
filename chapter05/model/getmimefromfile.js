exports.getMime = function(fs,extname) {
    //async
    fs.readFile('./mime.json', (err, data) => {
        if(err) {
            console.log('not found the file');
            return false;
        }

        console.log(data.toString());

        var Mimes = JSON.parse(data.toString());
        //console.log(Mimes[extname]);//return the extname
        //if the type is unknown
        return Mimes[extname] || 'text/html';
    })
}
