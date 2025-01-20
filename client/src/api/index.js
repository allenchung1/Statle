import axios from "axios";

const API = axios.create({
    baseURL: 'http://localhost:8080/api/',
});

export const getSearchResults = async (searchTerm) => API.get(`/search`, { params: { query: searchTerm } }); //get the search results from the server

export const putGuess = async(guess) => API.put('/game/guess', guess); //put a guess to the server

export const postGame = async() => API.post('/game'); //start a game and pick a random state