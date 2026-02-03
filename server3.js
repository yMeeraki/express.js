import express from "express";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send(`<h1>Home</h1>`);
});

app.get("/users", (req, res) => {
  res.send(`<h1>user</h1>`);
});

app.get("/wait", (req, res) => {
  setTimeout(() => {
    res.send(`<h1>result after 1s</h1>`);
  }, 1000);
});

app.listen(3200);
