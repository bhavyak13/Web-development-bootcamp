const express=require('express');
const app=express();
const port =3000;
const data=require('./data.json');
// console.log(data);


const path=require('path');
// const process=require('process');

app.set('views',path.join(__dirname,'/views'));
app.set('view engine','ejs');


// to include css,js!
// app.use(express.static('public'));
app.use(express.static(path.join(__dirname,'public')))


app.get('/',(req,res)=>{
    res.render('home');
})
app.get('/rand',(req,res)=>{
    const num = Math.floor(Math.random()*10)+1;
    res.render('rand',{num});
})
app.get('/r/:subreddit',(req,res)=>{
    const {subreddit}=req.params;
    res.render('subreddit',{subreddit});
})
app.get('/feed/:key',(req,res)=>{
    const {key}=req.params;
    const obj=data[key];
    if (obj===undefined){res.send("nothing in here :)")}
    else res.render('feed',{obj})
})
app.get('/cats',(req,res)=>{
    const arr=['caty','monti','bhuvanya','okeyCat'];
    res.render('cats',{arr});
})



app.listen(port,()=>{console.log(`Listening on port : ${port}`);})