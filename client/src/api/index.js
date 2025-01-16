import axios from "axios";

const API = axios.create({
    baseURL: 'http://localhost:8080/api/',
});

export const getSearchResults = async (searchTerm) => API.get(`/search`, { params: { query: searchTerm } }); //get the search results from the server

export const postGuess = async(guess) => API.post('/guess', guess); //post the guess to the server

export const getGame = async() => API.get('/game'); //get the random state for the game