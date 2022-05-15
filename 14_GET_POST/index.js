const express=require('express');
const app=express();
const port=3000;
// const ht=require('./views/ht.html');
const path=require('path');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/',(req,res)=>{
    res.render('home');
})

app.get('/store',(req,res)=>{
    res.send("Ok got your Get request response!!");
})
app.post('/store',(req,res)=>{
    const {toy,qty}=req.body;
    console.log(toy,qty);
    res.render('new',{toy,qty});
})
// app.post()

app.listen(port,()=>{
    console.log(`Listening on port : ${port}`);
})