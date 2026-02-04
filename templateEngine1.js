import express from "express";

const app = express();

app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");

app.get("/add-user", (req, res) => {
  res.render("addUsers");
});

app.post("/submit-user", (req, res) => {
  // console.log(req.body)
  res.render("submitUsers", req.body);
});

app.listen(3200);
