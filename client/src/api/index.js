import axios from "axios";

const API = axios.create({
    baseURL: 'http://localhost:8080/api/',
});

export const getSearchResults = async (searchTerm) => API.get(`/search`, { params: { query: searchTerm } }); //get the search results from the server

export const postGuess = async(guess) => API.post('/game/guess', guess); //post the guess to the server

export const getGameStatus = async() => API.get('/game/status'); //get the random state for the game

export const postGame = async() => API.post('/game'); //get the random state for the game