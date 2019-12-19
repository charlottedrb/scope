const desc = document.getElementById('description');
const post = document.getElementById('poster');
const date = document.getElementById('date');
const duree = document.getElementById('duree');
const act = document.getElementById('acteurs');
const recomp = document.getElementById('recompenses');
const box = document.getElementById('boxoffice');
const real = document.getElementById('real');
const genre = document.getElementById('genre');
const ecrit = document.getElementById('ecriture');


function search() {
    var search = document.getElementById('search').value;
    var text = 'http://www.omdbapi.com/?t=' + search + '&apikey=4a591bbb';
    const request = fetch(text)
        .then(function (response) {
            response.json() //analyse la réponse en JSON
                .then(function (value) {
                    console.log(value);
                    desc.innerHTML = 'Story : ' + value.Plot;
                    post.src = value.Poster;
                    date.innerHTML = 'Date : ' + value.Released;
                    duree.innerHTML = 'Runtime : ' + value.Runtime;
                    act.innerHTML = 'Actors : ' + value.Actors;
                    recomp.innerHTML = 'Awards : ' + value.Awards;
                    box.innerHTML = 'BoxOffice : ' + value.BoxOffice;
                    real.innerHTML = 'Director : ' + value.Director;
                    genre.innerHTML = 'Genre : ' + value.Genre;
                    ecrit.innerHTML = 'Writer : ' + value.Writer;
                });
        });
}

//function search(){
//}
