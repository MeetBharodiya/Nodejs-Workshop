const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Get Request from blogs");
})

router.get('/:id', (req, res) => {
    let id = req.params.id;
    res.send(`Blog with id: ${id}`);
})

module.exports = router;