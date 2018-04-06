var path=require('path');
var express=require('express');
var app=express();

app.param('id', function (req, res, next, id) {
  req.id = id
  next()
})

app.put('/message/:id', function (req, res) {
	let id=req.params.id;
  console.log(req.id)
  let hashedValue=require('crypto')
      .createHash('sha1')
      .update(new Date().toDateString() + id)
      .digest('hex');
      res.end(hashedValue)
})
app.listen(process.argv[2]);