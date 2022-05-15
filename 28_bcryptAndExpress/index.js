const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./models/user');
const bcrypt = require('bcrypt');
const saltRounds = 12;
const session = require('express-session');
const flash = require('connect-flash');

mongoose.connect('mongodb://localhost:27017/author-demo').then(() => { console.log("DB CONNECTED!") }).catch(e => { console.log(e); })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    console.log(req.method, req.path); next();
})
app.use(session({
    secret: 'ThisIsMySecret',
    resave: false,
    saveUninitialized: true,
}))

const fn = async (req, res, next) => {
    const { password, username } = req.body;
    const u = await User.findOne({ userName: username });
    // console.log(u);
    const hash = u.password;
    const result = bcrypt.compareSync(password, hash);
    // if (result == true) { console.log("SUCCESS"); next(); }
    if (result == true) { next(); }
    else { res.redirect('/login'); }
}

app.get('/', (req, res) => {
    res.send("HOME");
})
app.get('/users', (req, res) => {
    res.render('index');
})
app.get('/register', (req, res) => {
    res.render('new');
})
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    const hash = bcrypt.hashSync(password, saltRounds);
    const u = new User({ userName: username, password: hash });
    u.save();
    req.session.userId = u._id;
    res.redirect('/secret');
})
app.get('/login', (req, res) => {
    res.render('login');
})
app.post('/login', fn, async (req, res) => {
    const { username } = req.body;
    const u = await User.findOne({ userName: username });
    req.session.userId = u._id;
    res.redirect('/secret');
})
app.get('/secret', (req, res) => {
    if (!req.session.userId) { res.redirect('/login'); }
    else res.render('secret');
})
app.post('/logout', (req, res) => {
    if (req.session.userId) {
        // req.session.userId = null;
        req.session.destroy();

        res.redirect('/login');
        // res.send("Successfully LoggedOut!");
    }
    else res.redirect('/login');
})


app.listen(3000, () => { console.log("Listening!") })