const express = require('express');

var app = express();

app.get('/', (req, res, next) => {
    res.send('hello');
    next();
})

app.get('/news', (req, res, next) => {
    res.send('middleware 1');
    next();
})

app.get('/news', (req, res, next) => {
    res.send('middleware 2');
    next();
})

app.listen(3000);
