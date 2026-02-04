import express from "express";

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home", { name: "Yukti",age:30 });
});

app.listen(3200);
