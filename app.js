// Libraries

const express = require("express");
const https = require("https");
const app = express ();

// Get from root
app.get("/", function(req, res) {
  const query = "malmo";
  const apiKey = "28037607ccec8655f4df94bd3601d8c5&units";
  const unit = "metric";
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "=metric";

  https.get(url, function(response) {
    console.log(response);

// Return or render
    response.on("data", function(data) {
      const  weatherData = JSON.parse(data)
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
      res.write('<head><meta charset="utf-8"></head>');
      res.write("<img src=" + imageURL +">");
      res.write("<h1>It is " + weatherDescription + " and the temperature is " + temp + " Degrees celsius in Malmo at the moment</h1>");
      res.send();
    })
  })
})

app.listen(3000, function() {
  console.log("server is running on port 3000.");
});
