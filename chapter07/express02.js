const express = require('express');

var app = new express();

app.get('/', (req, res) => {
    res.send('hello, this is express');
})

app.get('/news/:aid', (req, res) => {
    console.log(req.params);
    res.send('hello, this is news');
})

app.get('/products', (req, res) => {
    console.log(req.query);
    res.send('hello, this is product');
})

app.listen(2001);
