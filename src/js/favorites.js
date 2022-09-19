const POSTER_PATH = "https://image.tmdb.org/t/p/original";

const moviesSection = document.querySelector("#movies");

if(window.localStorage.getItem("movies") === null){
window.localStorage.setItem("movies", JSON.stringify([]));
}

let favorites = JSON.parse(window.localStorage.getItem("movies"));

const createMovieElement = (movie) => {
  const divEl = document.createElement("div");
  const title = document.createElement("h2");
  const description = document.createElement("p");
  const movieIdEl = document.createElement("span");
  const poster = document.createElement("img");
  const removeFromFavorites = document.createElement("button");

  poster.src = `${POSTER_PATH}/${movie.poster_path}`;

  //Set styling
  divEl.classList.add('movie','flex', 'flex-col', 'content-center');
  poster.classList.add('h-80', 'rounded-lg', 'object-cover');
  poster.classList.add('rounded-lg');

  title.classList.add('text-4xl', 'font-bold', 'my-4');
  description.classList.add('text-sm');
  removeFromFavorites.classList.add('bg-slate-500', 'rounded-lg', 'p-2', 'text-neutral-200');
  
  title.textContent = movie.title;
  description.textContent = movie.overview;
  movieIdEl.textContent = movie.id;
  removeFromFavorites.textContent= "💔 Remove from favorites";

removeFromFavorites.addEventListener("click", ()=> {
    const newArray = favorites.filter(el => el !== movie);
    favorites = [...newArray];
    window.localStorage.setItem("movies", JSON.stringify(newArray));

    moviesSection.innerHTML = "";

    favorites.map(movie => createMovieElement(movie));
})
  divEl.appendChild(poster);
  divEl.appendChild(title);
  divEl.appendChild(description);
  divEl.appendChild(movieIdEl);
  divEl.appendChild(removeFromFavorites);

  moviesSection.appendChild(divEl);
};

favorites.map(movie => createMovieElement(movie));