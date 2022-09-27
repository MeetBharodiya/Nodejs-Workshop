var http = require('http')

http.createServer(function(req,res) {
    res.write("Server created successfully using Node JS")
    res.end();
}).listen(5000);