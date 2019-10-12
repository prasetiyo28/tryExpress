var express = require("express");
var path = require("path");
var app = express();

app.get('/',function(req, resp){
    var response = "Hallo " + req.query.Nama;
    // req.query.nama (ini untuk ambil dari paramater get) 
    // resp.end(JSON.stringify(req.query));
    
    resp.end(response);
});

app.listen(2019, function(){
    console.log('Listening at Port 2019')
})