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
app.get('/timestamp/:tv',function(req,res){
	var time=req.params.tv;
	var unix=0;
	var natural;
	if(isNaN(time)){
		var d=new Date(time);
         unix=d.getTime();
         if(unix)
         natural=months[d.getMonth()]+' '+d.getDate()+', '+d.getFullYear();
	     else natural=null;
	}
	else{
		var d=new Date(time*1000);
		unix=time*1000;
		if(unix)
		natural=months[d.getMonth()]+' '+d.getDate()+', '+d.getFullYear();
	    else natural=null;
	}
	if(unix==null) natural=null;
res.json({unixtime:unix/1000,naturaltime:natural});
});
// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
