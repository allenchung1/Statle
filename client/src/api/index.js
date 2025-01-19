import axios from "axios";

const API = axios.create({
    baseURL: 'http://localhost:8080/api/',
});

export const getSearchResults = async (searchTerm) => API.get(`/search`, { params: { query: searchTerm } }); //get the search results from the server

export const putGuess = async(guess) => API.put('/game/guess', guess); //post the guess to the server

export const getAnswer = async() => API.get('/game/answer'); //get the random state for the game

export const postGame = async() => API.post('/game'); //get the random state for the game