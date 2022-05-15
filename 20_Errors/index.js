const express = require('express');
const app = express();
const port = 3000;
const AppError = require("./appError");

app.use((req, res, next) => {
    console.log(req.method, req.path);
    next();
})

const verifypswd = (req, res, next) => {
    const { pswd } = req.query;
    if (pswd === 'okayvai') {
        next();
    } else {
        // res.send("Pass req.");
        throw new AppError("Password Required!!", 401);
    }
}



app.get('/', (req, res) => {
    res.send('HI');
})
app.get('/dog', (req, res) => {
    res.send('WooI');
})
app.get('/secret', verifypswd, (req, res) => {
    res.send("OKay vai my secret is I am Pupil at CF");
})



app.use((req, res) => {
    res.status(404).send("NOT FOUND BIRATHER!!");
})
// app.use((err, req, res, next) => {
//     console.log("*************************");
//     console.log(err);
//     console.log("*************************");
//     next(err);
//     // res.status(500).send("Internal SEVER error");
// })

app.use((err, req, res, next) => {
    const { status } = err;
    res.status(status).send("Oops Something went wrong!");
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})