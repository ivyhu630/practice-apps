require("dotenv").config();
const express = require("express");
const path = require("path");
const router = require("./router.js");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");

// Establishes connection to the database on server start
const db = require("./db");

const app = express();
app.use(express.json());

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);
// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get('/users', router.get);
app.put('/users/stage', router.put);
app.post('/users/billing', router.postBilling);
app.post('/users', router.postUserDetail);
app.post('/login', router.post);


app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
