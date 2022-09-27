const express = require('express');
const app = express();

app.listen(5000,()=>{console.log("Running........");});

app.get('/',(req,res)=>{
    res.send("Request from get");
})

app.get('/about',(req,res)=>{
    let temp=req.query.temp;
    let page=req.query.page;
  res.send({temp,page});
})


