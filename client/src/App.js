import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { InstructionModal, LoseModal, WinModal } from './components/Modal';
import GameTable from './components/GameTable';
import { Typography, TextField, Button, Autocomplete } from '@mui/material';
import { getSearchResults, putGuess, postGame } from './api';
import Confetti from 'react-confetti';

function App() {
  const [isInstructionModalOpen, setIsInstructionModalOpen] = useState(false);
  const [isWinModalOpen, setIsWinModalOpen] = useState(false);
  const [isLoseModalOpen, setIsLoseModalOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [guesses, setGuesses] = useState([]);
  const [gameId, setGameId] = useState(null);
  const [answer, setAnswer] = useState({});
  const [win, setWin] = useState(false);
  const [lose, setLose] = useState(false);
  const [lastRequestTime, setLastRequestTime] = useState(0); //used to set guess cooldown
  const [isRequesting, setIsRequesting] = useState(false); //used to set guess cooldown

  const hasStartedGame = useRef(false); //ensure that only one game starts

  const handleLookUp = (e, newValue) => {
    const value = newValue || '';
    setInputText(value);
  };

  const setUpGame = () => {
    postGame().then((res) => {
      setGameId(res.data.id);
      setAnswer(res.data.state);
      setWin(false);
      setLose(false);
      setGuesses([]);
    });
  };

  const makeGuess = (e) => {
    const now = Date.now();
    const timeDifference = now - lastRequestTime;
    const minRequestInterval = 300;
    if (timeDifference < minRequestInterval || isRequesting) {
      return;
    }
    setIsRequesting(true);

    putGuess({ guess: inputText, gameId: gameId }).then((res) => {
      if (res.data) {
        if (res.data.correct === true) {
          setWin(true);
          setIsWinModalOpen(true);
        } else if (res.data.updatedGame.guesses.length === 5) {
          setLose(true);
          setIsLoseModalOpen(true);
        }
        setGuesses([...guesses, res.data.guessedState]);
      }
      setLastRequestTime(now);
      setIsRequesting(false);
    }).catch((error) => {
      setIsRequesting(false);
    });
  };

  useEffect(() => {
    if (inputText) {
      getSearchResults(inputText).then((res) => {
        setSearchResults(res.data);
      });
    } else {
      setSearchResults([]);
    }
  }, [inputText]);
  
  useEffect(() => {
    if (!hasStartedGame.current) {
      hasStartedGame.current = true;
      setUpGame();
      setIsInstructionModalOpen(true);
    }
  }, []);

  return (
    <BrowserRouter>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '100vh',
          backgroundColor: 'rgb(30,40,40)',
          padding: 50,
          gap: 25,
        }}
      >
        {win && <Confetti run={win} numberOfPieces={150} />}
        <Typography 
          variant="h1"
          sx={{ 
            fontFamily: '-apple-system', 
            fontWeight: 'bold', 
            textAlign: 'center', 
            color: 'white' 
          }}
        >
          STATLE
        </Typography>
        <Autocomplete 
          freeSolo 
          disableClearable
          inputValue={inputText}
          onInputChange={handleLookUp}
          value={inputText}
          onChange={handleLookUp}
          disabled={isWinModalOpen || isLoseModalOpen}
          options={searchResults.map((state) => state.name)}
          sx={{
            width: '25%',
            '& .MuiAutocomplete-inputRoot': {
              color: 'white', // Text color
              backgroundColor: 'rgb(50, 50, 50)', // Input field background color
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'white', // Outline color
              },
              '&:hover fieldset': {
                borderColor: 'white', // Outline color on hover
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white', // Outline color when focused
              },
            },
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Enter a state"
              variant="outlined"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  makeGuess(e);
                }
              }}
              sx={{
                width: '100%',
                '& .MuiFormLabel-root': {
                  color: 'white', // Label color
                },
                '& .MuiFormLabel-root.Mui-focused': {
                  color: 'white', // Label color when focused
                },
                '& .MuiInputBase-input': {
                  color: 'white', // Text color
                  backgroundColor: 'rgb(50, 50, 50)', // Input field background color
                },
              }}
            />
          )}
        />
        <Button
          variant='contained'
          onClick={makeGuess}
          disabled={isWinModalOpen || isLoseModalOpen}
          sx={{
            height: 50, 
            width: 150,
            fontSize: 20,
            backgroundColor: 'rgb(150,150,150)',
            color: 'white',
            '&:hover': {
              backgroundColor: 'rgb(50, 50, 50)',
            },
          }}
        >
          GUESS
        </Button>
        <InstructionModal isOpen={isInstructionModalOpen} onClose={() => setIsInstructionModalOpen(false)}/>
        <GameTable guesses={guesses} answer={answer}/>
        <WinModal isOpen={isWinModalOpen} onClose={() => setIsWinModalOpen(false)} answer={answer} setUpGame={setUpGame}/>
        <LoseModal isOpen={isLoseModalOpen} onClose={() => setIsLoseModalOpen(false)} answer={answer} setUpGame={setUpGame}/>
        {(win || lose) && <Button 
          variant="contained" 
          sx={{ 
            height: '50px', 
            width: '200px', 
            fontSize: '25px',
            backgroundColor: 'rgb(100, 100, 100)',
            color: 'white',
            '&:hover': {
              backgroundColor: 'rgb(50, 50, 50)',
            },
          }}
          onClick={() => {
            setUpGame();
          }}
        >
          RESTART
        </Button>}
      </div>
    </BrowserRouter>
  );
};

export default App;
