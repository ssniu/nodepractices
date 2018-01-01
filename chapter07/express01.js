const express = require('express');

var app = new express();

app.get('/', (req, res) => {
    res.send('hello, this is express');
})

app.get('/news', (req, res) => {
    res.send('hello, this is news');
})

app.listen(2001);
