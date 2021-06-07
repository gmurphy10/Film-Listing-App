//TMDB

const API_KEY = 'api_key=38e622b50030b52927f44c558e26cb08';
const BASE_URL = 'https://api.themoviedb.org/3'
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'
+API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

getMovies(API_URL);

function getMovies(url) {

  fetch(url).then(res => res.json()).then(data => {
    console.log(data.results);

      showMovies(data.results);
  })

}

function showMovies(data) {

  data.forEach(movie => {
      const {title, poster_path, vote_average, overview} = movie
      const movieEl = document.createElement('div');
      movieEl.classList.add('movie');
      movie.El.innerHTML = `
      <img src="${IMG_URL+poster_path}" alt="${title}">

        <div class ="movie-info">
            <h3>${title}</h3>
            <span class="${getColor(vote_average)}">${vote_average}</span>
        </div>

        <div class="overview">
            <h3>Overview</h3>
            ${overview}
        </div>
      `
  })
}
