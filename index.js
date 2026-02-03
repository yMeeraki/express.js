import express from "express";

const app = express();

app.use((req, res, next) => {
  console.log(req.url);
  next();
});

app.get("/", (req, res) => {
  res.send(`<h1>Homepage</h1>`);
});

app.get("/users", (req, res) => {
  res.send(`<h1>Users page</h1>`);
});

app.get("/products", (req, res) => {
  res.send(`<h1>Products page</h1>`);
});

app.listen(3200);
