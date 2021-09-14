var url = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}"


fetch(url)
    .then(response)
        .then(data) {
        console.log(data)
        };

        fetch("https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key})
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.error(err);
        });