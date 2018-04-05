var path=require("path");
var express=require('express');
var app=express();

app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));
  app.set('views', path.join(__dirname, 'templates'));
  app.set('view engine', 'pug');

app.get('/home',(req,res)=>{
	 res.render('index', {date: new Date().toDateString()})

})
app.listen(process.argv[2]||3000);