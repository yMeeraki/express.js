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

app.get("/users", (req, res) => {
  const users = [
    { name: "Yukti", email: "yukti@gmail.com", age: 22 },
    { name: "Vivek", email: "vivek@gmail.com", age: 24 },
  ];
  res.render("users", { users: users });
});

app.listen(3200);
