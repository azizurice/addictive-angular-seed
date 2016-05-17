var express=require("express");
var app=express();
/*
app.use("/", function(req, res){
	res.send("Hello World");
});
*/
app.use('/app',express.static(__dirname + '/app'));


var server=app.listen(3000, function(){
	var host=server.address().address;
	var port =server.address().port;
	console.log(" Server is running at http://%s %s ",host, port);
});