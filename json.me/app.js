var fs=require('fs');
var express=require('express');
var app=express();


app.get('/books', function (req, res) {
	fs.readFile(process.argv[3],function(e,data){
		res.send((JSON.parse(data)));
	})

    });  

app.listen(process.argv[2]);