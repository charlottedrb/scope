//function search(){
//}
const movie = document.getElementById('movie');
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
const title = document.getElementById('movieTitle');

movie.style.display = "none";

function search(){
    movie.style.display = "flex";
    var search = document.getElementById('search').value;
    var text = 'http://www.omdbapi.com/?t=' + search + '&apikey=4a591bbb';
    const request = fetch(text)
        .then(function (response) {
            response.json() //analyse la réponse en JSON
                .then(function (value) {
                    console.log(value);
                    // document.location.href="movie.html";
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
                    title.innerHTML = value.Title.toUpperCase();
                });
        });

    ytplayer = document.getElementById('ytplayer');
    ytplayer.src = "https://www.youtube.com/embed/?listType=search&list=" + search + "bande annonce vostfr";
    // var link = 'https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=' + search + '%20bande%20annoncetype=video&videoDefinition=high&key=AIzaSyA8sfoWgWYvCeozwyxf5ZSPV839_XDp5-Q';
    // const YTrequest = fetch(link)
    //     .then(function (response) {
    //         response.json()
    //             .then(function (value) {
    //                 console.log(value);

    //             });
    //     });
}
