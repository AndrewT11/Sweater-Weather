//location by lat and long

var url = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=e1fa988b28630ad2f63ed66bdf22a5ee"

//location by city name

var cityUrl = "https://api.openweathermap.org/data/2.5/weather?q={cityname}&appid=e1fa988b28630ad2f63ed66bdf22a5ee";

//believe this to be the form used to input search results
fetch("https://api.openweathermap.org/data/2.5/weather?q=" + inputBoxEl.value + "&appid=" + apiKey)


trying to get 5dayforecast information
searchButton.addEventListener("click", forecast5)

function forecast5() {
fetch("https://api.openweathermap.org/data/2.5/forecast?id=4684904&appid=apikey")
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


    Detroit Id = 4990729
    id can be found at city search:
    data.id
    How to pull info from api dir and place it in another dir if it is in a function?

    fetch("https://api.openweathermap.org/data/2.5/forecast?id=4990729&appid=e1fa988b28630ad2f63ed66bdf22a5ee")


//append forecast boxes with usable info
Use selectors to




in city search API, data.coord.lat, data.coord.lon


one call API
fetch('https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}')

//setting future 5 day forecast date
var targetDate1 = new Date();
targetDate1.setDate(targetDate1.getDate() + 1);
var dd = targetDate1.getDate();
var mm = targetDate1.getMonth() + 1; // 0 is January, so we must add 1
var yyyy = targetDate1.getFullYear();
var dateString1 = mm + "/" + dd + "/" + yyyy;
alert(dataString1)

var targetDate2 = new Date();
targetDate2.setDate(targetDate2.getDate() + 2);
var dd = targetDate2.getDate();
var mm = targetDate2.getMonth() + 1; 
var yyyy = targetDate2.getFullYear();
var dateString = mm + "/" + dd + "/" + yyyy;


var targetDate3 = new Date();
targetDate3.setDate(targetDate3.getDate() + 3);
var dd = targetDate3.getDate();
var mm = targetDate3.getMonth() + 1; 
var yyyy = targetDate3.getFullYear();
var dateString = mm + "/" + dd + "/" + yyyy;


var targetDate4 = new Date();
targetDate4.setDate(targetDate4.getDate() + 4);
var dd = targetDate4.getDate();
var mm = targetDate4.getMonth() + 1; 
var yyyy = targetDate4.getFullYear();
var dateString = mm + "/" + dd + "/" + yyyy;


var targetDate5 = new Date();
targetDate5.setDate(targetDate5.getDate() + 5);
var dd = targetDate5.getDate();
var mm = targetDate5.getMonth() + 1; 
var yyyy = targetDate5.getFullYear();
var dateString = mm + "/" + dd + "/" + yyyy;

box1El.date = dataString1;

Store fetch into a variable. (ex. globalData)

let globalData = fetch("https://api.openweathermap.org/data/2.5/weather?q=" + inputBoxEl.value + "&appid=" + apiKey)
.then(function (response) {
    if(response.ok) {
    return response.json()
    }
})
    .then(function(data) {
        console.log(data);
    })

pull info from globalData now to store for toher fetches.get

Now, I can pull all that info (temp, humdity, etc) by calling globalData

globalData.main.temp

Mainly for cityID to be used. 

cityID = globalData.id;

At this PointerEvent, we don't need to nest a fetch function inside of a fetch function.




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


box1Temp.innerHTML = data.list[4].main.temp;
box1Wind.innerHTML = data.list[4].wind.speed;
box1Humidity.innerHTML = data.list[4].main.humidity;
box1Icon.innerHTML = data.list[4].weather[0].icon;