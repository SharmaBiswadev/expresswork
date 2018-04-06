var path=require('path');
var express=require('express');
var app=express();



app.get('/search/', function (req, res) {
	let id=req.query;
  console.log(id)
  
      res.end(JSON.stringify(id));
})
app.listen(process.argv[2]);