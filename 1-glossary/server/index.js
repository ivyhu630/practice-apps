require("dotenv").config();
const express = require("express");
const path = require("path");
const routes = require("./routers.js");


const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());

// set up get method and post method
app.get('/words', routes.get);

app.put('/edit', routes.put);

app.post('/words', routes.post);

app.delete('/words/:word', routes.delete);

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
