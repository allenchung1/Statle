import express from 'express';
import { getSearchResults, postGuess, getGameStatus, postGame } from '../controllers/index.js';

const router = express.Router();

router.get("/search", getSearchResults);
router.post("/game/guess", postGuess);
router.get("/game/status", getGameStatus);
router.post("/game", postGame);

export default router;
