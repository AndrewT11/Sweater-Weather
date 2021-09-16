var apiKey = "e1fa988b28630ad2f63ed66bdf22a5ee";

//search input value
function currentWeather() {
fetch("https://api.openweathermap.org/data/2.5/weather?q=" + inputBoxEl.value + "&appid=" + apiKey)
    .then(function (response) {
        if(response.ok) {
        return response.json()
        }
    })
        .then(function(data) {
            console.log(data);
            citySearch.innerHTML = "City: " + inputBoxEl.value;
            currentTempEl.innerHTML = "Temperature: " + Math.floor(data.main.temp*(9/5)-459.67) + "°F";
            currentWindEl.innerHTML = "Wind Speed: " + data.wind.speed;
            currentHumidityEl.innerHTML = "Humidity: " + data.main.humidity;
            dateEl.innerHTML = "Date: " +moment().format('MMM Do YYYY');
            iconEl.innerHTML = data.weather.icon;

        });

    // currentUvEL.innerHTML = cannot find UV information in city search
    // uvColorDisplay
}

//Buttons
var searchButton = document.getElementById("searchBtn")
searchButton.addEventListener("click", currentWeather)

//selector City current variables
var dateEl = document.getElementById("cityDate")
var currentTempEl = document.getElementById("currentTemp")
var currentWindEl = document.getElementById("currentWind")
var currentHumidityEl = document.getElementById("currentHumidity")
var uvInfoBox = document.getElementById("uvInfo")
var currentUvEL = document.getElementById("currentUv")
var uvColorDisplay = document.getElementById("uvColorDisplay")
var iconEl = document.getElementById("icon")

//selector 5-day Forecast Variables
var box1El = document.getElementById("box1")
var box2El = document.getElementById("box2")
var box3El = document.getElementById("box3")
var box4El = document.getElementById("box4")
var box5El = document.getElementById("box5")

var date5El = document.getElementById("date5")
var iconEl = document.getElementById("icon")
var temp5El = document.getElementById("temp5")
var wind5El = document.getElementById("wind5")
var humidity5El = document.getElementById("humidity5")

var inputBoxEl = document.getElementById("inputBox")



// This will be how we get names to appear on the populated page 
// will need to do localStorage.getItem, setItem for each new search.This
// localStorage.getItem("city")
// localStorage.setItem("city", citysearch)