const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    if (req.query.isAdmin) {
        next();
    } else {
        res.send("HUDUSH!");
    }
})

router.get('/secret', (req, res) => {
    res.send("HN VAI");
})

module.exports = router;