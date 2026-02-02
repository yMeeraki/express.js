import express from "express";
import { resolve } from "path";

const app = express();

app.get("/", (req, res) => {
  // console.log(__dirname) // Won't work as we are using module
  // console.log(resolve(`view/home.html`)); // To get absolute path
  res.sendFile(resolve(`view/home.html`));
});

app.get("/login",(req,res)=>{
  res.sendFile(resolve(`view/login.html`));
})

app.get("/submit",(req,res)=>{
  res.sendFile(resolve(`view/submit.html`));
})

app.listen(3200);
