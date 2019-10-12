var express = require('express');
var path = require('path');
var app = express();

app.use('/cssFiles',express.static(__dirname + '/assets'));

app.get('/',function(req, resp){
    resp.sendFile('./index.html',{root: path.join(__dirname, './')});
});

app.listen(2019, function(){
    console.log('Listening Port 2019');
});