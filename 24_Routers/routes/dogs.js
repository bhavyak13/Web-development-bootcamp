const express = require('express');
const router = express.Router();

router.get('/dogs', (req, res) => {
    res.send("VIEWING DOG INDEX PAGE!!");
})
router.get('/dogs/:id', (req, res) => {
    res.send("VIEWING SPECIFIC DOG");
})
router.get('/dogs/:id/edit', (req, res) => {
    res.send("EDITING DOG!!");
})
module.exports=router;