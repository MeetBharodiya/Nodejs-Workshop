const express = require('express');
const app = express();

app.listen(5000,()=>{console.log("Running........");});

const middlewareFunction = function(req,res,next){
    console.log("Hello from middleware function");
    next();
}

app.use(middlewareFunction);

app.get('/',(req,res)=>{
    res.send("From home page");
})

app.get('/about',(req,res)=>{
    res.send("From about");
})
