import {API_URL, API_KEY} from "./constants"

const NAME = "movies";
const storage = window.localStorage; 

export const localStorageService = {
    initializeData: () => {
        if(storage.getItem(NAME) === null){
            storage.setItem(NAME, JSON.stringify([]));
        }
    },
    getData: () => JSON.parse(storage.getItem(NAME)),
    setData: (data) =>  storage.setItem(NAME, JSON.stringify(data))
}

export const getData = async (query) => {
    const movies = await fetch(
      `${API_URL}/search/movie?api_key=${API_KEY}&query=${query}`
    );
    return movies.json();
  };
  