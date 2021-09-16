apiKey = e1fa988b28630ad2f63ed66bdf22a5ee

fetch("https://api.openweathermap.org/data/2.5/weather?q=Detroit&appid=e1fa988b28630ad2f63ed66bdf22a5ee")
    .then(function (response) {
        console.log(response);
        return response.json()
    })
    .then(function(data) {
        console.log(data);
    });

searchButton.addEventListener("click". currentWeather)

//search input value
function currentWeather() {
var inputBoxEl = document.getElementById("inputBox")
var queryString = "https://api.openweathermap.org/data/2.5/weather?q=" + inputBoxEl.textContent + "&appid=" + apiKey;
}

//Buttons
var searchButton = document.getElementById("searchBtn")

//selector City current variables
var dateEl = document.getElementById("cityDate")
var currentTempEl = document.getElementById("currentTemp")
var currentWindEl = document.getElementById("currentWind")
var currentHumidityEl = document.getElementById("currentHumidity")
var uvInfoBox = document.getElementById("uvInfo")
var currentUvEL = document.getElementById("currentUv")
var uvColorDisplay = document.getElementById("uvColorDisplay")
var iconEl = document.getElementById("")

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


// var  = document.getElementById("")
// var  = document.getElementById("")


//store weather data in weather variable

var weatherBlocks = {
    date: "9/16/21",
    iconId: "sunny",
    temperature: {value: 18, unit: "farenheit"},
    wind: {value: 8.53, unit: "MPH"},
    humidity: {value: 66, unit: "%"}
}

//change innerHTML to selectors to display weather data

function displayWeather() {
date5El.innerHTML =
iconEl.innerHTML = `<img src="icons/${weather.iconId.png}"/>`; 
temp5El.innerHTML = `${weather.temperature.value}°<span>C</span>`
wind5El.innerHTML =`${weather.wind.value}<span>MPH</span>`
humidity5El.innerHTML =`${weather.humidity.value}<span>%</span>`
}



var url = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=e1fa988b28630ad2f63ed66bdf22a5ee"

var cityUrl = "https://api.openweathermap.org/data/2.5/weather?q=Detroit&appid=e1fa988b28630ad2f63ed66bdf22a5ee"



// function weather () {

// }


// OpenweatherMap API call by city name:

// api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}


// This will be how we get names to appear on the populated page 
// will need to do localStorage.getItem, setItem for each new search.This
// localStorage.getItem("city")
// localStorage.setItem("city", citysearch)