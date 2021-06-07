//TMDB

const API_KEY = 'api_key=38e622b50030b52927f44c558e26cb08';
const BASE_URL = 'https://api.themoviedb.org/3'
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'
+API_KEY;

getMovies(API_URL);

function getMovies(url) {

  fetch(url).then(res => res.json()).then(data => {
    console.log(data);

      showMovies(data.results);
  })

}

function showMovies(data) {
  data.forEach(movie => {
      const movieEl = document.createElement('div');
      movieEl.classList.add('movie');

  })
}
