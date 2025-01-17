import prisma from '../prismaClient.js';

export const getSearchResults = async (req, res, next) => {
    try {
        const { query } = req.query;
        const results = await prisma.state.findMany({
            where: { 
                name: { 
                    startsWith: query, 
                    mode: 'insensitive' 
                },
            },
        });
        res.json(results);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch search results' });
    }
}

export const postGuess = async (req, res, next) => {
    try {
        const { guess } = req.body;
        const guessResult = await prisma.state.findFirst({
            where: { 
                name: {
                    equals: guess,
                    mode: 'insensitive',
                }, 
            },
        });
        res.json(guessResult);
    } catch (error) {
        return next(error);
    }
}

export const getGame = async (req, res, next) => {
    try {
        const { game } = req.body;
        // const searchResults = await Search.find
    } catch (error) {
        return next(error);
    }
}