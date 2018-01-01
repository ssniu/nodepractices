const express = require('express');

const app = express();

var session = require('express-session');

app.use(session({
    secret: 'keyboard',
    resave: false,
    saveUninitialized: true
}))

app.get('/', (req, res) => {
    //get the session information
    if(req.session.userinfo){
        res.send('my ' + req.session.userinfo);
    }else {
        res.send('pls login first');
    }

})

app.get('/login', (req, res) => {

 //set the session
 req.session.userinfo="myinfo";
    res.send('login successfully')
})

app.get('/news', (req, res) => {
    //get the session information
    if(req.session.userinfo){
        res.send('my ' + req.session.userinfo);
    }else {
        res.send('pls login first');
    }

})

app.listen(9001);
