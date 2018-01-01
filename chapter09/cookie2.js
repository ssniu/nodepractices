const express = require('express');

const cookieParser = require('cookie-parser');

var app = express();

//app.use(cookieParser());
app.use(cookieParser('mycode'));//add a string inside for signed method

app.get('/', (req, res) => {
    console.log(req.signedCookies);
    res.send('hello');
    //req.cookie.cookiename // get the cookie

})


//signed method
app.get('/set', (req, res) => {
    //signed: true -- crypt-cookie
    //step1: app.use(cookieParser('mystring'))
    //step2: signed: true
    //step3: req.signedCookie;

    res.cookie('username', 'cookie value', {maxAge: 1000*30, signed: true});

    res.send('set the cookie');
})

app.listen(4000);
