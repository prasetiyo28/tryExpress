var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
var router = express.Router();

// app.use(cookieParser());

// app.get('/myFirstRoute', router);

// app.get('/',function(req,resp){
//     resp.cookie('myFirstCookie', 'looks good');
//     resp.end('Hey There !');
// });

// app.get('/removeCookie',function(req, resp){
//     resp.clearCookie('myFirstCookie');
//     resp.end('cookie was cleared');
// });

app.use('/myFirstRoute',router);

router.get('/page',function(req,resp){
    resp.end('What is going on !');
});

router.get('/morepage',function(req,resp){
    resp.end('otherpage');
});


app.listen(2019,function(){
    console.log('i am listening to 2019')
});

