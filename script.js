function search() {
    var search = document.getElementById('search').value;
    var text = 'http://www.omdbapi.com/?t=' + search + '&apikey=4a591bbb';
    const request = fetch(text)
        .then(function (response) {
            response.json() //analyse la réponse en JSON
                .then(function (value) {
                    console.log(value);
                    document.getElementById('description').innerHTML = value.Plot;
                    document.getElementById('poster').src = value.Poster;
                });
        });
}

//function search(){
//}

>>>>>>> be7237e82b38d46dc59d40ed4b960d89ef5c2fe5
