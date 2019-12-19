const request = fetch('http://www.omdbapi.com/?t=avengers&apikey=4a591bbb')
.then(function (response) {
    response.json() //analyse la réponse en JSON
        .then(function (value) {
            console.log(value);
            document.getElementById('description').innerHTML = value.Plot;

        });
    });





>>>>>>> be7237e82b38d46dc59d40ed4b960d89ef5c2fe5
