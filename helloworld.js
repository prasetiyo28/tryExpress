var express = require("express");
var app = express();

app.get('/hello',function(request,response){
    response.send('Hellow There, From Express !')

});

app.listen(1337,function(){
 console.log('listening at port 1337');
});
