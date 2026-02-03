import express from "express";

const app = express();

const checkAge = (req, res, next) => {
  if (!req.query.age || req.query.age < 18) {
    res.send("You cannot access!!");
  }
};

app.get("/", (req, res) => {
  res.send(`<h1>Home</h1>`);
});

app.get("/login", checkAge, (req, res) => {
  res.send(`<h1>login</h1>`);
});

app.get("/users", checkAge, (req, res) => {
  res.send(`<h1>user</h1>`);
});

app.get("/products", (req, res) => {
  res.send(`<h1>products</h1>`);
});

app.listen(3200);
