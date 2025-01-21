import express from 'express';
import { getSearchResults, putGuess, postGame, putUserState } from '../controllers/index.js';

const router = express.Router();

router.get("/state/search", getSearchResults);
router.put("/game/guess", putGuess);
router.post("/game", postGame);
router.put("/state/user", putUserState)

export default router;
