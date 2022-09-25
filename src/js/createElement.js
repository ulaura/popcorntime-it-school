import { POSTER_PATH } from "./constants";
import { localStorageService } from "./services";

export const createMovieElement = (movie, canAdd = true) => {
    const divEl = document.createElement("div");
    const title = document.createElement("h2");
    const description = document.createElement("p");
    const movieIdEl = document.createElement("span");
    const poster = document.createElement("img");
    const favoriteButton = document.createElement("button");
    const favorites = localStorageService.getData();
  
    poster.src = `${POSTER_PATH}/${movie.poster_path}`;
  
    //Set styling
    divEl.classList.add('movie','flex', 'flex-col', 'content-center');
    poster.classList.add('h-80', 'rounded-lg', 'object-cover');
  
    title.classList.add('text-4xl', 'font-bold', 'my-4');
    description.classList.add('text-sm');
    favoriteButton.classList.add('bg-slate-500', 'rounded-lg', 'p-2', 'text-neutral-200');
    
    title.textContent = movie.title;
    description.textContent = movie.overview;
    movieIdEl.textContent = movie.id;
    favoriteButton.textContent= canAdd ? "❤ Add to favorites" : "💔 Remove from favorites";

  if(canAdd){
    favoriteButton.addEventListener("click", () => {
        //TODO figure out a better method of checking if movie already exists
        const exists = localStorageService.getData().includes(movie);
        //console.log(exists);
        if(!exists){
            localStorageService.setData([...localStorageService.getData(), movie]);
        }
    })
   } else {
    favoriteButton.addEventListener("click", ()=> {
        // const newArray = favorites.filter(el => el !== movie);
        // favorites = [...newArray];
        localStorageService.setData(favorites.filter(el => el.id !== movie));
        moviesSection.innerHTML = "";
        localStorageService.getData().map(movie => {
            const movieEl = createMovieElement(movie, false);
            moviesSection.appendChild(movieEl);
        });
    });
}
    divEl.appendChild(poster);
    divEl.appendChild(title);
    divEl.appendChild(description);
    divEl.appendChild(movieIdEl);
    divEl.appendChild(favoriteButton);
  
    return divEl;
  };
  