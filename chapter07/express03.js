const express = require('express');

var app = express();

app.set('view engine', 'ejs');//set the ejs module

app.get('/', (req, res) => {
    //res.send('hello, this is express');
    res.render('index');
})

app.get('/news', (req, res) => {
    //console.log(req.params);
    var list = ['11','2','3'];
    //res.send('hello, this is news');
    res.render('news', {
        list: list
    });
})

app.get('/products', (req, res) => {
    console.log(req.query);
    res.send('hello, this is product');
})

app.listen(2001);
