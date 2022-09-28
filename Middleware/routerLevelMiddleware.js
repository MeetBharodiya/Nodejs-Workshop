const express = require('express');
const app = express();

app.listen(5000, () => { console.log("Server running on port 5000"); });

const middlewareFunction = function (req, res, next) {
    console.log("Hello from middleware function");
    next();
}

app.get('/', middlewareFunction, (req, res) => {
    res.send("From home page");
})

app.get('/about', (req, res) => {
    res.send("From about");
})
