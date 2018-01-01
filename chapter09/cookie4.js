const express = require('express');

const cookieParser = require('cookie-parser');

var app = express();

//app.use(cookieParser());
app.use(cookieParser());

app.get('/', (req, res) => {

    res.send('visited cities:' + req.cookies.cities);
    //req.cookie.cookiename // get the cookie
})


app.get('/visit', (req, res) => {
    //url : /visit?city=beijing/shanghai

    var city = req.query.city;//get the information from current url
    //save the city names inside an array
    var cities = req.cookies.cities;//get all cities
     if(cities) {
         cities.push(city); //add the city inside the array
     }else {
         cities=[];//if no visited city
         cities.push(city);
     }

    res.cookie('cities', cities, {maxAge: 1000*60*10});

    res.send('visited city is: ' + city);
})

app.listen(4010);
