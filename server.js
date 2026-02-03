import express from "express";

const app = express();

const ageCheck = (req, res, next) => {
  if (!req.query.age || req.query.age < 18) {
    res.send("You are not allow to access");
  }
  else{
     next();
  } 
};

app.use(ageCheck);

app.get("/", (req, res) => {
  res.send("Server");
});

app.get("/login", (req, res) => {
  res.send("Server");
});

app.listen(3200);
