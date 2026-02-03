import express from "express";

const app = express();

const errorHandling = (error, req, res, next) => {
  res.status(error.status || 500).send("Try after sometime");
};

app.get("/", (req, res) => {
  res.send("Server");
});

app.get("/users", (req, res) => {
  res.send("user");
});

app.get("/errors", (req, res, next) => {
  const error = new Error("");
  error.status = 404;
  next(error);
});

app.use(errorHandling);

app.listen(3200);
