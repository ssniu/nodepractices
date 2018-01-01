const express = require('express');

const app = express();

var session = require('express-session');

app.use(session({
    secret: 'keyboard',
    //name: 'mysession', //default session name is connect_id
    resave: false,
    saveUninitialized: true,
    //cookie: secure //https visit only, can set the cookie property there
    cookie: {maxAge: 5000},
    rolling: true //recount the time from latest refresh 
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
