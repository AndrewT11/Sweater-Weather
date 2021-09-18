var apiKey = "e1fa988b28630ad2f63ed66bdf22a5ee";


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
            currentWindEl.innerHTML = "Wind Speed: " + data.wind.speed + " mph";
            currentHumidityEl.innerHTML = "Humidity: " + data.main.humidity + "%";
            dateEl.innerHTML = "Date: " + moment().format('MMM Do YYYY');
            // icon = data.weather[0].icon;
            var { description, icon } = data.weather[0];
            var iconImg = document.getElementById('icon');
            iconImg.src = iconUrl;
            var iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;



            //needed for 5-day forecast. Can only be called by city ID, not name.
            var cityID = data.id;

            return fetch("https://api.openweathermap.org/data/2.5/forecast?id=" + cityID + "&appid=e1fa988b28630ad2f63ed66bdf22a5ee")
        })
            .then(function (response) {
                if(response.ok) {
                return response.json()
                }
            })
                .then(function(data) {
                    console.log(data)
                
                //5-day forecast code
                box1Temp.innerHTML = "Temperature: " + Math.floor(data.list[4].main.temp*(9/5)-459.67) + "°F";
                box1Wind.innerHTML = "Wind Speed: " + data.list[4].wind.speed + " mph";
                box1Humidity.innerHTML = "Humidity: " + data.list[4].main.humidity + "%";
                box1Icon.innerHTML = data.list[4].weather[0].icon;
                box2Temp.innerHTML = "Temperature: " + Math.floor(data.list[12].main.temp*(9/5)-459.67) + "°F";
                box2Wind.innerHTML = "Wind Speed: " + data.list[12].wind.speed + " mph";
                box2Humidity.innerHTML = "Humidity: " + data.list[12].main.humidity + "%";
                // box2Icon.innerHTML = data.list[12].weather[0].icon;
                box3Temp.innerHTML = "Temperature: " + Math.floor(data.list[20].main.temp*(9/5)-459.67) + "°F";
                box3Wind.innerHTML = "Wind Speed: " + data.list[20].wind.speed + " mph";
                box3Humidity.innerHTML = "Humidity: " + data.list[20].main.humidity + "%";
                box3Icon.innerHTML = data.list[20].weather[0].icon;
                box4Temp.innerHTML = "Temperature: " + Math.floor(data.list[28].main.temp*(9/5)-459.67) + "°F";
                box4Wind.innerHTML = "Wind Speed: " + data.list[28].wind.speed + " mph";
                box4Humidity.innerHTML = "Humidity: " + data.list[28].main.humidity + "%";
                box4Icon.innerHTML = data.list[28].weather[0].icon;
                box5Temp.innerHTML = "Temperature: " + Math.floor(data.list[36].main.temp*(9/5)-459.67) + "°F";
                box5Wind.innerHTML = "Wind Speed: " + data.list[36].wind.speed + " mph";
                box5Humidity.innerHTML = "Humidity: " + data.list[36].main.humidity + "%";
                box5Icon.innerHTML = data.list[36].weather[0].icon;         
                });
}

// var citiesSearched = localStorage.getItem("citiesSearched");
//     citiesSearched.textContent = inputBoxEl.value;
//     citiesSearched = JSON.parse(citiesSearched)
//     localStorage.setItem("citiesSearched", citiesSearched);

// if(citiesSearched !==null) {
//     for(var i = 0; i < citiesSearched.length; i++) {
//         var createBtn = document.createElement("button");
//          createBtn.textContent = inputBoxEl.value;
//         searchPostAppend.appendChild(createBtn);
//     }
// }


//Buttons
var searchButton = document.getElementById("searchBtn")
searchButton.addEventListener("click", currentWeather)

var searchPostAppend = document.getElementById("searchPost")

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
var box1El = document.getElementById("box0")
var box2El = document.getElementById("box1")
var box3El = document.getElementById("box2")
var box4El = document.getElementById("box3")
var box5El = document.getElementById("box4")

var date5El = document.getElementById("date")
var iconEl = document.getElementById("icon")
var temp5El = document.getElementById("forecastTemp")
var wind5El = document.getElementById("forecastWind")
var humidity5El = document.getElementById("forecastHumidity")

var inputBoxEl = document.getElementById("inputBox")

//manipulating date grab to appear in forecast boxes
var targetDate1 = new Date();
targetDate1.setDate(targetDate1.getDate() + 1);
var dd = targetDate1.getDate();
var mm = targetDate1.getMonth() + 1; 
var yyyy = targetDate1.getFullYear();
var dateString1 = mm + "/" + dd + "/" + yyyy;

var targetDate2 = new Date();
targetDate2.setDate(targetDate2.getDate() + 2);
var dd = targetDate2.getDate();
var mm = targetDate2.getMonth() + 1; 
var yyyy = targetDate2.getFullYear();
var dateString2 = mm + "/" + dd + "/" + yyyy;

var targetDate3 = new Date();
targetDate3.setDate(targetDate3.getDate() + 3);
var dd = targetDate3.getDate();
var mm = targetDate3.getMonth() + 1; 
var yyyy = targetDate3.getFullYear();
var dateString3 = mm + "/" + dd + "/" + yyyy;

var targetDate4 = new Date();
targetDate4.setDate(targetDate4.getDate() + 4);
var dd = targetDate4.getDate();
var mm = targetDate4.getMonth() + 1; 
var yyyy = targetDate4.getFullYear();
var dateString4 = mm + "/" + dd + "/" + yyyy;

var targetDate5 = new Date();
targetDate5.setDate(targetDate5.getDate() + 5);
var dd = targetDate5.getDate();
var mm = targetDate5.getMonth() + 1; 
var yyyy = targetDate5.getFullYear();
var dateString5 = mm + "/" + dd + "/" + yyyy;

//selectors for the dates for each forecast box
var box1Date = document.querySelector("#box1 .date");
var box2Date = document.querySelector("#box2 .date");
var box3Date = document.querySelector("#box3 .date");
var box4Date = document.querySelector("#box4 .date");
var box5Date = document.querySelector("#box5 .date");

//setting dates in each forecast box
box1Date.innerHTML = dateString1;
box2Date.innerHTML = dateString2;
box3Date.innerHTML = dateString3;
box4Date.innerHTML = dateString4;
box5Date.innerHTML = dateString5;

//selectors for 5 day forecast boxes
var box1Temp = document.querySelector("#box1 .forecastTemp"); 
var box1Wind = document.querySelector("#box1 .forecastWind");
var box1Humidity = document.querySelector("#box1 .forecastHumidity");
var box1Icon = document.querySelector("#box1 .forecastIcon");
var box2Temp = document.querySelector("#box2 .forecastTemp"); 
var box2Wind = document.querySelector("#box2 .forecastWind");
var box2Humidity = document.querySelector("#box2 .forecastHumidity");
var box2Icon = document.querySelector("#box2 .forecastIcon");
var box3Temp = document.querySelector("#box3 .forecastTemp"); 
var box3Wind = document.querySelector("#box3 .forecastWind");
var box3Humidity = document.querySelector("#box3 .forecastHumidity");
var box3Icon = document.querySelector("#box3 .forecastIcon");
var box4Temp = document.querySelector("#box4 .forecastTemp"); 
var box4Wind = document.querySelector("#box4 .forecastWind");
var box4Humidity = document.querySelector("#box4 .forecastHumidity");
var box4Icon = document.querySelector("#box4 .forecastIcon");
var box5Temp = document.querySelector("#box5 .forecastTemp"); 
var box5Wind = document.querySelector("#box5 .forecastWind");
var box5Humidity = document.querySelector("#box5 .forecastHumidity");
var box5Icon = document.querySelector("#box5 .forecastIcon");


// This will be how we get names to appear on the populated page 
// will need to do localStorage.getItem, setItem for each new search.This
// localStorage.getItem("city")
// localStorage.setItem("city", citysearch)

