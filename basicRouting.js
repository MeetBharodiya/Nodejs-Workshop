const express = require('express');
const app = express();

app.listen(5000,()=>{console.log("Running........");});

app.get('/',(req,res)=>{
    res.send("Request from get");
})

app.post('/post',(req,res)=>{
  res.send("Request from post");
})

app.put('/put',(req,res)=>{
  res.send("Request from put");
})

app.delete('/delete',(req,res)=>{
  res.send("request from delete");
})
