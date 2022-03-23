require("dotenv").config();
const express = require("express");
const path = require("path");
const save = require("./db.js").save;
const getWords = require("./db.js").getWords;

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());

// set up get method and post method
app.get('/words', (req, res) => {
  // console.log('test');
  return getWords()
  .then(data => {
    save(data);
    res.send('success');
  });

});

app.post('/words', (req, res) => {
  let data = req.body;
  console.log('data ', data);
  save(data);
  res.send('success');


});

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
