const express = require('express');
const app = express();
const session = require('express-session');
const flash = require('connect-flash');

app.use(session({
    secret: "thisIsMyWierdSecret",
    resave: false,
    saveUninitialized: true,
}))
app.set('view engine', 'ejs');

app.use((req, res, next) => {
    console.log(req.method, req.path);
    next();
})
app.use(flash());
app.use((req, res, next) => {
    res.locals.messages = req.flash('info');
    next();
})

app.get('/', (req, res) => {
    // console.log(req.session);
    res.send("HOME!");
})
app.get('/viewcount', (req, res) => {
    if (req.session.count) {
        req.session.count += 1;
    }
    else req.session.count = 1;
    // console.log(req.session);
    res.send(`this is your view count : ${req.session.count}`);
})
app.get('/register', (req, res) => {
    const { username = 'test' } = req.query;
    req.session.username = username;
    // console.log(req.session);
    req.flash('info', 'Welcome back!');
    res.redirect('/greet')
})
app.get('/greet', (req, res) => {
    console.log(req.flash('info'));
    res.render('home');
})

app.listen(3000, () => { console.log("Serving!") })