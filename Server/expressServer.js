const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("Server created successfully using Express JS");
})

app.listen(5000, () => {
    console.log("Running.........");
});

// npm run start-express => nodemon expressServer.js => to run the ExpressJS Server