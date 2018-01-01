
var express  = require('express');

var cookieParser = require('cookie-parser');

var app = express();

app.use(cookieParser('sign'));


app.get("/",function(req,res){

    //console.log(req.cookies);

    console.log(req.signedCookies);   /*获取加密的cookie信息*/
    res.send("你好nodejs");
});
app.get("/set",function(req,res){


    //参数1：名字
    //参数2:cookie的值
    //参数3：cookie的配置信息
    res.cookie('userinfo','cookie222_info',{maxAge:600000,signed:true});
    res.send("设置cookie成功");

});


app.listen(3001,'127.0.0.1');
