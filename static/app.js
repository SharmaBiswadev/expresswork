var path=require("path");
var express=require('express');
var app=express();

app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));

app.get('/home',(req,res)=>{

})
app.listen(process.argv[2]||3000);