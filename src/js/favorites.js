import { localStorageService } from "./services";
import { createMovieElement } from "./createElement";

const moviesSection = document.querySelector("#movies");

localStorageService.initializeData();

let favorites = localStorageService.getData();

favorites.map(movie => {
  favorites.map(movie => createMovieElement(movie));
  const movieEl = 
  moviesSection.appendChild(movieEl);
})
