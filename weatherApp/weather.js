//jshint esversion:6

const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
// app.use(express.static(path.join(__dirname, "static")));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/weather.html");
});

app.post("/", (req, res) => {
  // console.log("recieved");
  // var search = res.body.search

  console.log(req.body.cityName);


  const query = req.body.cityName;
  const apiKey = "60d95e1651c0474e5c9ac3c605e498ce";
  const units = "metric";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    query +
    "&appid=" +
    apiKey +
    "&units=" +
    units;
  https.get(url, function (response) {
    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      console.log(weatherData);
      const temp = weatherData.main.temp;
      const area = weatherData.name;
      const description = weatherData.weather[0].description;
      console.log(temp);
      console.log(description);
      console.log(area);
      res.write( "<h1> the temperature of "+ area+ "</h1>")
      res.write("<h1>currently is " +temp+" degree celcicus</h1>")
       res.write("<h1>description is " + description + "</h1>");
      res.send( );
    });

    console.log(response);
    //res.sendFile(__dirname + "/weather.html");
  });
});

app.listen(3000, () => {
  console.log(`Server started on 3000`);
});
