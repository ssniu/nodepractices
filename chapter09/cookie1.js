const express = require('express');

const cookieParser = require('cookie-parser');

var app = express();

app.use(cookieParser());

app.get('/', (req, res) => {
    console.log(req.cookies);
    res.send('hello');
    //req.cookie.cookiename // get the cookie

})

app.get('/news', (req, res) => {

    console.log(req.cookies);
    res.send('hello');

})

app.get('/set', (req, res) => {
    //res.cookie('username', 'cookie value', {maxAge: 1000*30, path: '/news'});
    //path: show the cookie only under the /news
    //res.cookie('username', 'cookie value', {maxAge: 1000*30, path: '/news', httpOnly: true})
    //httpOnly: only the BE can visit it

    res.cookie('username', 'cookie value', {maxAge: 1000*30});
    //res.cookie('username', 'cookie value', {maxAge: 1000*30, domain: '.ssniu.com'});
    //domain: the Second-level domain can share the cookie
    //param 1 = name of cookie, param2 is the value of cookie, value 3 is time
    res.send('set the cookie');
})

app.listen(4000);
