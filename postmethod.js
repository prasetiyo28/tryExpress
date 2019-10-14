var express = require('express');
var path = require('path');
var fs = require('fs');

var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser());

app.use('/cssFiles',express.static(__dirname + '/assets'));
app.get('/',function(req, resp){
    resp.sendFile('./index.html',{root: path.join(__dirname, './')});
});

app.post('/',function(req,resp){
  resp.end(JSON.stringify(req.body));  
});


app.listen(2019, function(){
    console.log('listening to port 2019');

});