// On récupère tous nos éléments HTML sur lesquels on a placé des id pour ensuite y placer des données
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
const ytplayer = document.getElementById('ytplayer');
const button = document.getElementById('letsgo');

// On cache la div de classe "movie" pour ne pas que l'espace qu'elle prend soit "présent" sur le site même si celle-ci est vide
movie.style.display = "none";
// Empêche la page de se recharger
button.addEventListener("click", function (e) { 
    e.preventDefault(); 
    return false;
});

function search(){
    // Une fois qu'on a lancé la recherche on peut affiche la div de classe "movie"
    movie.style.display = "flex";
    var search = document.getElementById('recherche').value;
    var text = 'http://www.omdbapi.com/?t=' + search + '&apikey=4a591bbb';
    const request = fetch(text) //appel de l'API
        .then(function (response) { //récupération de la réponse de l'API en JSON
            response.json() //analyse la réponse en JSON
                .then(function (value) { //récupartion de la valeur de la réponse
                    console.log(value); 
                    // On met la valeur reçue dans le conteneur qui lui convient grâce aux id récupéré plus haut
                    desc.innerHTML = "<b>Story </b>" + ": " + value.Plot;
                    post.src = value.Poster;
                    date.innerHTML = "<b>Date </b>" + ": " + value.Released;
                    duree.innerHTML = "<b>Runtime </b>" + ": " + value.Runtime;
                    act.innerHTML = "<b>Actors </b>" + ": " + value.Actors;
                    recomp.innerHTML = "<b>Awards </b>" + ": " + value.Awards;
                    box.innerHTML = "<b>BoxOffice </b>" + ": " + value.BoxOffice;
                    real.innerHTML = "<b>Director </b>" + ": " + value.Director;
                    genre.innerHTML = "<b>Genre </b>" + ": " + value.Genre;
                    ecrit.innerHTML = "<b>Writer </b>" + ": " + value.Writer;
                    title.innerHTML = value.Title.toUpperCase();
                });
        });
    // Permet d'afficher la bande-annonce
    ytplayer.src = "https://www.youtube.com/embed/?listType=search&list=" + search + "trailer"; // on utilise une URL trouvée sur la doc d'API Youtube  à laquelle on 
                                                                                                // rajoute notre titre de film et le mot "trailer" pour affiche la BA
}
