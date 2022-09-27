const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Request from get");
})

app.post('/post', (req, res) => {
  res.send("Request from post");
})

app.put('/put', (req, res) => {
  res.send("Request from put");
})

app.delete('/delete', (req, res) => {
  res.send("Request from delete");
})

app.listen(5000, () => {
  console.log("Server running on port 5000");
});