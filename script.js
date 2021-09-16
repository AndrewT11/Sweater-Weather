// api key = e1fa988b28630ad2f63ed66bdf22a5ee

//selector variables



var url = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}"

var url2 = "https://openweathermap.org/api/one-call-api"

// fetch(url)
//     .then(response)
//         .then(data) {
//         console.log(data)
//         };

fetch(url2)
.then(response => {
    return response.json();
})
.then(data => {
    console.log(data);
})


// function weather () {

// }


// OpenweatherMap API call by city name:

// api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}


// This will be how we get names to appear on the populated page 
// will need to do localStorage.getItem, setItem for each new search.This
// localStorage.getItem("city")
// localStorage.setItem("city", citysearch)

// var buttonClickHandler = function (event) {
//     // What is `event.target` referencing?
//     // TODO: Write your answer here
//     // the data-language attribute in the buttons
//     var language = event.target.getAttribute('data-language');
  
//     // Why is this `if` block in place?
//     // TODO: Write your answer here
//     // If there is a language selected, then we will get the repos for that language from the api website
//     if (language) {
//       getFeaturedRepos(language);
  
//       repoContainerEl.textContent = '';
//     }
//   };