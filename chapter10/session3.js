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

//set the cookie expire time
//req.session.cookie.maxAge = 1000;

app.get('/logout', (req, res) => {

 //destroy the session
 req.session.destroy((err)=>{
     console.log(err);
 });
 
    res.send('login successfully')
})

app.listen(9001);
