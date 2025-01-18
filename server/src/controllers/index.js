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

export const postGuess = async (req, res, next) => { //put
    try {
        // verify the guess
        const { guess } = req.body;
        const guessResult = await prisma.state.findFirst({
            where: { 
                name: {
                    equals: guess,
                    mode: 'insensitive',
                }, 
            },
        });
        // submit the guess to the game model
        // if (guessResult) {
        //     const correct = await prisma.game.findFirst({
        //         where: {
        //             stateId: guessResult.id,
        //         },
        //     });
        // }
        res.json(guessResult);
    } catch (error) {
        return next(error);
    }
}

export const getGameStatus = async (req, res, next) => {
    try {
        const { game } = req.body;
        // const searchResults = await Search.find
    } catch (error) {
        return next(error);
    }
}

export const postGame = async (req, res, next) => {
    try {
        await prisma.game.deleteMany();

        // const states = await prisma.state.findMany();
        // const randomState = states[Math.floor(Math.random() * states.length)];
        const randomState = await prisma.state.findFirst({
            skip: Math.floor(Math.random() * 50),
        });

        const newGame = await prisma.game.create({
            // data: {
            //     state: {
            //         connect: { id: randomState.id }
            //     },
            //     guesses: []
            // }
            data: {
                stateId: randomState.id, // Set the stateId directly
                guesses: []
            },
            include: {
                state: true
            }
        });
        res.status(201).json(newGame);
    } catch (error) {
        return next(error);
    }
}