import express from "express";
import { resolve } from "path";

const app = express();
const absolutePath = resolve("view");

const staticPath = resolve("public");
app.use(express.static(staticPath));

app.use(express.urlencoded({ extended: false })); //  Built in middleware

app.get("/", (req, res) => {
  res.sendFile(`${absolutePath}/home.html`);
});

app.get("/login", (req, res) => {
  res.sendFile(`${absolutePath}/login.html`);
});

app.get("/users", (req, res) => {
  res.sendFile(`${absolutePath}/users.html`);
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  res.sendFile(`${absolutePath}/submit.html`);
});

app.listen(3200);
