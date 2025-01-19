import express from 'express';
import { getSearchResults, putGuess, getAnswer, postGame } from '../controllers/index.js';

const router = express.Router();

router.get("/search", getSearchResults);
router.put("/game/guess", putGuess);
router.get("/game/answer", getAnswer);
router.post("/game", postGame);

export default router;
