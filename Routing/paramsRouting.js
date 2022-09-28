const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Request from get");
})

app.get('/about', (req, res) => {
  let temp = req.query.temp;
  let page = req.query.page;
  res.send({ temp, page });
})

app.listen(5000, () => {
  console.log("Server running on port 5000");
});