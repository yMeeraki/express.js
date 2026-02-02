const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.get("/about", (req, res) => {
  res.send(`<p>Hello World: About</p> 
  <input type="text">
  <h1>WOW</h1>
  `);
});

app.listen(3200);
