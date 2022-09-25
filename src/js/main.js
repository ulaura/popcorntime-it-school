import { createMovieElement } from './createElement';
import { getData, localStorageService } from './services';

const searchElement = document.querySelector("#movieSearch");
const moviesSection = document.querySelector("#movies");

localStorageService.initializeData();


searchElement.addEventListener("change", async (e) => {
  const value = e.target.value;
  const { results } = await getData(value);

  moviesSection.innerHTML = "";

  results.map((item) => {
    const movieEl = createMovieElement(item);
    moviesSection.appendChild(movieEl);
  });
});