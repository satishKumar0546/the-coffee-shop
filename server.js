/**
 * Using express.js as the server
 * Port=8080
 * 
 */
const express = require('express');
const app = express();
const port = 8080;

const cors = require('cors');
const fs = require("fs");
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.get('/orders', (req, res) => {
  resolveData('orders', req, res);
});
app.get('/payments', (req, res) => {
  resolveData('payments', req, res);
});
app.get('/prices', (req, res) => {
  resolveData('prices', req, res);
});

const resolveData = (name, req, res) =>{
  fs.readFile(`./src/data/${name}.json`, "utf8", (err, jsonString) => {
    if (err) {
      console.log("Error reading file from disk:", err);
      return;
    }
    try {
      const result = JSON.parse(jsonString);
      res.json(result);
      console.log(`/${name}: data::`, result);
    } catch (err) {
      console.log("Error parsing JSON string:", err);
    }
  });
}

app.listen(port, () => {})

