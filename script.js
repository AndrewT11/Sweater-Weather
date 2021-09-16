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
            currentHumidityEl.innerHTML = "Humidity: " + data.main.humidity + "%";
            dateEl.innerHTML = "Date: " + moment().format('MMM Do YYYY');
            iconEl.innerHTML = data.weather[0].icon;
            var cityID = data.id;

            return fetch("https://api.openweathermap.org/data/2.5/forecast?id=" + cityID + "&appid=e1fa988b28630ad2f63ed66bdf22a5ee")
        })
            .then(function (response) {
                console.log(response)
                if(response.ok) {
                return response.json()
                }
            })
                .then(function(data) {
                    console.log(data)

                });
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

var targetDate1 = new Date();
targetDate1.setDate(targetDate1.getDate() + 1);
var dd = targetDate1.getDate();
var mm = targetDate1.getMonth() + 1; // 0 is January, so we must add 1
var yyyy = targetDate1.getFullYear();
var dateString1 = mm + "/" + dd + "/" + yyyy;
// So you can see the output
alert(dateString1);


var targetDate2 = new Date();
targetDate2.setDate(targetDate2.getDate() + 2);
var dd = targetDate2.getDate();
var mm = targetDate2.getMonth() + 1; // 0 is January, so we must add 1
var yyyy = targetDate2.getFullYear();
var dateString2 = mm + "/" + dd + "/" + yyyy;
// So you can see the output
alert(dateString2);

var targetDate3 = new Date();
targetDate3.setDate(targetDate3.getDate() + 3);
var dd = targetDate3.getDate();
var mm = targetDate3.getMonth() + 1; // 0 is January, so we must add 1
var yyyy = targetDate3.getFullYear();
var dateString3 = mm + "/" + dd + "/" + yyyy;
// So you can see the output
alert(dateString3);

var targetDate4 = new Date();
targetDate4.setDate(targetDate4.getDate() + 4);
var dd = targetDate4.getDate();
var mm = targetDate4.getMonth() + 1; // 0 is January, so we must add 1
var yyyy = targetDate4.getFullYear();
var dateString4 = mm + "/" + dd + "/" + yyyy;
// So you can see the output
alert(dateString4);

var targetDate5 = new Date();
targetDate5.setDate(targetDate5.getDate() + 5);
var dd = targetDate5.getDate();
var mm = targetDate5.getMonth() + 1; // 0 is January, so we must add 1
var yyyy = targetDate5.getFullYear();
var dateString5 = mm + "/" + dd + "/" + yyyy;
// So you can see the output
alert(dateString5);