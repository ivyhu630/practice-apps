require("dotenv").config();
const express = require("express");
const path = require("path");
const save = require("./db.js").save;
const update = require("./db.js").update;
const deleteOne = require("./db.js").deleteOne;
const getWords = require("./db.js").getWords;

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());

// set up get method and post method
app.get('/words', (req, res) => {
  return getWords()
  .then(data => {
    res.send(data);
  });
});

app.post('/edit', (req, res) => {
  let data = req.body;
  update(data)
  .then(() =>{
    res.send('success');
  });
});

app.post('/words', (req, res) => {
  let data = req.body;
  save(data).then(() =>{
    res.send('success');
  });
});

app.post('/delete', (req, res) => {
  let id = req.body;
  deleteOne(id).then(() =>{
    res.send('success');
  });
});

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
