const express = require('express');
const app = express();
const port = 3000;
const morgan=require('morgan');

// app.use((req,res,next)=>{
//     console.log("MIDDLEWARE BOLTE");
//     next();
// })
// app.get('/',(req, res) => {
//     res.send('HI');
// })
app.use(morgan('tiny'));
app.use((req, res, next) => {
    console.log(req.method, req.path);
    next();
})


const f = (req, res, next) => {
    console.log("MIDDLEWARE BOLTE");
    next();
}
const verifypswd = (req, res, next) => {
    const { pswd } = req.query;
    if (pswd === 'okayvai') {
        next();
    } else
        res.send("Pass req.");
}
app.get('/', f, (req, res) => {
    res.send('HI');
})
app.get('/dog', (req, res) => {
    res.send('WooI');
})
app.get('/secret', verifypswd, (req, res) => {
    res.send("OKay vai my secret is I am Pupil at CF");
})
app.use((req,res)=>{
    res.status(404).send("FK!");
})
app.listen(port, () => {
    console.log(`listening on port ${port}`);
})