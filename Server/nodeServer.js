var http = require('http')

http.createServer(function (req, res) {
    res.write("Server created successfully using Node JS")
    res.end();
}).listen(5000, () => {
    console.log("Server running on port 5000")
});

// npm run start-node => nodemon nodeServer.js => to run the Node Server