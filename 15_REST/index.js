const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const { v4: uuid } = require('uuid');
const methodOverride = require('method-override');


app.set("views", path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));




//REST : REpresentational State Tranfer


/*
CRUD:
C : Create
R : Read
U : Update
D : Destroy
*/

/*

/comments -> base URL

GET /comments - List all comments!
GET /comments/new - Form to create new comment
POST /comments - Create a new comment on server!
GET /comment/:id - Get one comment (using ID)
PATCH /comment/:id - Update one Comment!
DELETE /comments/:id - Destroy one comment!

*/

//our fake data:
let comments = [
    {
        id: uuid(),
        username: "bhavya",
        text: "Nice pic bro!"
    },
    {
        id: uuid(),
        username: "bk13",
        text: "Nice joke"
    },
    {
        id: uuid(),
        username: "Colt",
        text: "lalaallalaa hue hue hue"
    },
    {
        id: uuid(),
        username: "Mahadev",
        text: "Om shanti!"
    }
]

let createit = (u, t, id) => {
    let obj = { id: id, username: u, text: t }
    comments.push(obj);
}




app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
})
app.get('/comments/new', (req, res) => {
    res.render('comments/new');
})
app.post('/comments', (req, res) => {
    const { username, text } = req.body;
    createit(username, text, uuid());
    // res.render('comments/index', { comments });
    res.redirect('/comments');
})
app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const obj = comments.find(obj => obj.id === id);
    if (obj === undefined) { res.send(`No comment found with id : ${id}`); }
    else { res.render('comments/show', { obj }); }
})
app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const obj = comments.find(obj => obj.id === id)
    if (obj === undefined) { res.send(`No comment found with id : ${id}`); }
    else res.render('comments/edit', { obj })
})
app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const { newComment } = req.body;
    const obj = comments.find(obj => obj.id === id);
    obj.text = newComment;
    res.redirect('/comments');
})
app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    const obj = comments.find(obj => obj.id === id);
    if (obj !== undefined) {comments = comments.filter(obj => obj.id !== id);}
    else res.send(`We couldn't find id : '${id}' in our database! `);
    res.redirect('/comments');
})



app.listen(port, () => {
    console.log("listening on port 3000");
})