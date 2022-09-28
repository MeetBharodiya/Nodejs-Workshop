const express = require('express');
const app = express();

app.listen(5000,()=>{console.log("Running........");});

app.get('/',(req,res)=>{
    res.send("You are in Home page of Nike.com");
})

app.get('/shoe',(req,res)=>{

  if(Object.keys(req.query).length != 0)
  {
      res.send(`Type of shoe : ${req.query.type} and color is : ${req.query.color}`)
  }
  else
  {
    res.send("All shoe will be displayed here");
  }
})
