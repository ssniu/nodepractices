const express = require('express');

const app = express();

var session = require('express-session');

var connectMongo = require('connect-mongo')(session);



app.use(session({
    secret: 'keyboard',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 1000*30*60},
    rolling: true,
    store: new connectMongo({
        url: 'mongodb://127.0.0.1:27017/myusers',
        touchAfter: 24*3600
    })
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

app.listen(9001);
