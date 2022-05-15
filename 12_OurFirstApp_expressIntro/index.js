const express = require('express');
const app = express();
let port = 3000;

/*
Godlike explanation!!

Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).

Each route can have one or more handler functions, which are executed when the route is matched.

Route definition takes the following structure:

app.METHOD(PATH, HANDLER)

Where:

    app is an instance of express.
    METHOD is an HTTP request method, in lowercase.
    PATH is a path on the server.
    HANDLER is the function executed when the route is matched.

*/

/*
request(req) is an object created by express based upon the incoming http request!
response(res) is an object made by Express , both of which are passed into this callback
and res has a bunch of methods on it including res.send whihch is used to send back content!
*/


// app.use((req, res)=>{
//     console.log("We got a new request!!");
//     res.send("Mahadev seeing you!");
// })

app.get('/', (req, res) => {
    res.send("This is our home page!!");
})
app.get('/cats', (req, res) => {
    res.send("Meow!!");
})
app.get('/dogs', (req, res) => {
    res.send("bhowww!!");
})
app.get('/search', (req, res) => {
    // console.log(req.query);
    const { q } = req.query;
    if (!q) {
        res.send("Nothing found if nothing searched!");
    }
    res.send(`Searched with query : ${q}`);
})

app.get('/r', (req, res) => {
    res.send("Nothing found if nothing searched!");
})
app.get('/r/:keyword', (req, res) => {
    // console.log(req.params);
    const { keyword } = req.params;
    res.send(`Showing results for ${keyword}`);
})
app.get('/r/:keyword/:keyword2', (req, res) => {
    // console.log(req.params);
    const { keyword, keyword2 } = req.params;
    res.send(`Showing results for ${keyword} ordered by ${keyword2}`);
})

app.get('*', (req, res) => {
    res.send("Sorry No match found!");
})


app.listen(port, () => { console.log(`Listening on port : ${port}`); })