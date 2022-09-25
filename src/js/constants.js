import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

export const API_URL = "https://api.themoviedb.org/3";
export const POSTER_PATH = "https://image.tmdb.org/t/p/original";
// export const API_KEY = "35ab6d12331f50dd5c82138038e1b272";
export const API_KEY = process.env.API_KEY