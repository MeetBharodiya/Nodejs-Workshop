const express = require('express');
const app = express();
const blogs = require('./routes/blogs');

app.use('/blogs', blogs);

app.get('/', (req, res) => {
    res.send("Get Request from Root/Home Page");
})

app.listen(5000, () => {
    console.log("Server running on Port 5000");
});