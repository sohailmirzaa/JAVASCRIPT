//jshint esversion:6

const bodyParser = require("body-parser");
const express = require("express");
const request = require("request");

const app = express();
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
  console.log("its working");
});


app.post("/", (req, res) => {
  console.log("the server is up and running");
  const email = req.body.emailAdd;
  const name = req.body.firstname;
  const surname = req.body.lastname;
  console.log(email);
  console.log(name);
  console.log(surname);
  res.sendFile(__dirname + "/sucess.html");
});

app.listen(3000, () => {
  console.log(`Server started on 3000`);
});
