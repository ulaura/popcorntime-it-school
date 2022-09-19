const API_URL = "https://api.themoviedb.org/3";
const POSTER_PATH = "https://image.tmdb.org/t/p/original";
const API_KEY = "35ab6d12331f50dd5c82138038e1b272";

const searchElement = document.querySelector("#movieSearch");
const moviesSection = document.querySelector("#movies");

if(window.localStorage.getItem("movies") === null){
window.localStorage.setItem("movies", JSON.stringify([]));
}

const favorites = JSON.parse(window.localStorage.getItem("movies"));

const getData = async (query) => {
  const movies = await fetch(
    `${API_URL}/search/movie?api_key=${API_KEY}&query=${query}`
  );
  return movies.json();
};

const createMovieElement = (movie) => {
  const divEl = document.createElement("div");
  const title = document.createElement("h2");
  const description = document.createElement("p");
  const movieIdEl = document.createElement("span");
  const poster = document.createElement("img");
  const addToFavorites = document.createElement("button");

  poster.src = `${POSTER_PATH}/${movie.poster_path}`;

  title.textContent = movie.title;
  description.textContent = movie.overview;
  movieIdEl.textContent = movie.id;
  addToFavorites.textContent= "Add to favorites";

addToFavorites.addEventListener("click", ()=> {
    favorites.push(movie);
    window.localStorage.setItem("movies", JSON.stringify(favorites));
})
  divEl.appendChild(poster);
  divEl.appendChild(title);
  divEl.appendChild(description);
  divEl.appendChild(movieIdEl);
  divEl.appendChild(addToFavorites);

  moviesSection.appendChild(divEl);
};

favorites.map(movie => createMovieElement(movie));


searchElement.addEventListener("change", async (e) => {
  const value = e.target.value;
  const { results } = await getData(value);

  moviesSection.innerHTML = "";
  results.map((item) => createMovieElement(item));
});