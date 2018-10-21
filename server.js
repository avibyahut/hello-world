// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
app.get('/api/timestamp/:tv',function(req,res){
	var time=req.params.tv;
  var d;
	if(isNaN(time)){
		d=new Date(time);
         
	}
	else{
		 d=new Date(time*1000);
	}
  var op;
	if(!d.getTime()) op={"error":"invalid date"};
  else op={unixtime:d.getTime(),naturaltime:d.toUTCString()};
  res.json(op);
});
app.get('/api/timestamp/',function(req,res){
var d=new Date();
    
res.json({unixtime:d.getTime(),naturaltime:d.toUTCString()});
})
// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
