const express = require('express');
const app = express();
const cp = require('cookie-parser');

app.use(cp('okayThisIsMySecret'));

app.get('/', (req, res) => {
    console.log(req.cookies);
    console.log(req.signedCookies);
    res.send("HI");
})
app.get('/namcookie', (req, res) => {
    res.cookie('nam', 'bhavya');
    res.redirect('/');
})
app.get('/getsignedcookie', (req, res) => {
    res.cookie('fruit', 'grape', { signed: true })
    res.redirect('/');
})
app.listen(3000, () => { console.log("Listening!"); })