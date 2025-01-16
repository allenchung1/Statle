import express from 'express';
import { getSearchResults, postGuess, getGame } from '../controllers/index.js';

const router = express.Router();

router.get("/search", getSearchResults);
router.post("/guess", postGuess);
router.get("/game", getGame);

export default router;
