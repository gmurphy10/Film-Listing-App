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
      const movieEl = document.createElement('div');
      movieEl.classList.add('movie');
      movie.El.innerHTML = `
      <img src="https://images.unsplash.com/photo-1590179068383-b9c69aacebd3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80" alt="image">

        <div class ="movie-info">
            <h3>Movie Title</h3>
            <span class="green">9.8</span>
        </div>

        <div class="overview">
            <h3>Overview</h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
        </div>
      `
  })
}
