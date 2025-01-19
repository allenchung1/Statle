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

export const putGuess = async (req, res, next) => {
    try {
        // verify the guess
        const { guess, gameId } = req.body;
        const guessedState = await prisma.state.findFirst({
            where: { 
                name: {
                    equals: guess,
                    mode: 'insensitive',
                }, 
            },
        });
        if (!guessedState) {
            return res.json(null)
        }
        //submit the guess to the game model and check if correct
        const updatedGame = await prisma.game.update({
            where: { id: gameId },
            data: {
                guesses: {
                    push: guess
                }
            },
            include: {
                state: true
            }
        });
        if (guessedState.id === updatedGame.stateId) {
            return res.json({ correct: true, guessedState, updatedGame })
        }
        res.status(201).json({ correct: false, guessedState, updatedGame });
    } catch (error) {
        return next(error);
    }
}

export const getAnswer = async (req, res, next) => {
    try {
        const { gameId } = req.body;
        const answer = await prisma.game.findFirst({
            where: { id: gameId },
            include: {
                state: true
            }
        })
        res.json(answer);
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
            data: {
                state: {
                    connect: { id: randomState.id }
                },
                guesses: []
            },
            // data: {
            //     stateId: randomState.id, // Set the stateId directly
            //     guesses: []
            // },
            // include: {
            //     state: true
            // }
        });
        res.status(201).json(newGame);
    } catch (error) {
        return next(error);
    }
}