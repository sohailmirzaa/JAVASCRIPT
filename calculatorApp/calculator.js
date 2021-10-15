const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/calculator.html");
});
app.get('/bmr', (req, res) => {
  res.sendFile(__dirname+"/Bmr.html");
  
});
app.post("/", (req, res) => {
   // console.log(req.body.num1);
    var num1 =Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1+num2;

  res.send("the calcualted result is "+ result);
});
app.post('/bmr', (req, res) => {
   var height = Number(req.body.height);
   var weight = Number(req.body.weight);
   var age= Number(req.body.age);
   var result =  88.362 + (13.397*weight) + (4.799 * height)-(5.677 * age);
   res.send("the calcualted result is " + result);
  
});

app.listen(3000, () => {
  console.log(`Server started on 3000`);
});
