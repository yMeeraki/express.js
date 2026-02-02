import express from "express";
import { resolve } from "path";

const app = express();
const absolutePath = resolve(`view`); // To get absolute path

const publicPath = resolve("public");
app.use(express.static(publicPath));

app.get("/", (req, res) => {
  // console.log(__dirname) // Won't work as we are using module

  res.sendFile(`${absolutePath}/home.html`);
});

app.get("/login", (req, res) => {
  res.sendFile(resolve(`${absolutePath}/login.html`));
});

app.get("/submit", (req, res) => {
  res.sendFile(resolve(`${absolutePath}/submit.html`));
});

app.use((req, res) => {
  res.status(404).sendFile(resolve(`${absolutePath}/404.html`));
});

app.listen(3200);
