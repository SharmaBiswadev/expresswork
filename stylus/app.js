var path=require("path");
var express=require('express');
var app=express();

 var bodyparser = require('body-parser')
 app.use(bodyparser.urlencoded({extended: true}))

app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));
  app.set('views', path.join(__dirname, 'templates'));
  app.set('view engine', 'pug');

app.get('/home',(req,res)=>{
	 res.render('index', {date: new Date().toDateString()})

})

app.post('/form',(req,res)=>{
	 res.end(req.body.str.split('').reverse().join(''));

})
app.listen(process.argv[2]||3000);