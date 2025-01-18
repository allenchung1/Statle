import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { InstructionModal, WinModal } from './components/Modal';
import GameTable from './components/GameTable';
import { Typography, TextField, Button, Autocomplete } from '@mui/material';
import { getSearchResults, postGuess } from './api';

function App() {
  const [isInstructionModalOpen, setIsInstructionModalOpen] = useState(false);
  const [isWinModalOpen, setIsWinModalOpen] = useState(false);
  const [isLoseModalOpen, setIsLoseModalOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [guesses, setGuesses] = useState([]);

  const handleLookUp = (e, newValue) => {
    const value = newValue || '';
    setInputText(value);
  };

  const makeGuess = (e) => {
    postGuess({ guess: inputText }).then((res) => {
      if (res.data) {
        console.log('Guess submitted', res.data);
        setGuesses([...guesses, res.data]);
      }
    });
  };

  useEffect(() => {
    if (guesses.length === 5) {
      setIsWinModalOpen(true);
    }
  }, [guesses]);

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
    // choose a random state for the game
    setIsInstructionModalOpen(true);
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
          onClick={() => setIsInstructionModalOpen(true)}
          sx={{
            height: 50, 
            width: 150,
            fontSize: 20,
            backgroundColor: 'rgb(150,150,150)',
            color: 'white',
          }}
        >
          GUESS
        </Button>
        <InstructionModal isOpen={isInstructionModalOpen} onClose={() => setIsInstructionModalOpen(false)} />
        <GameTable guesses={guesses}/>
        < WinModal isOpen={isWinModalOpen} onClose={() => setIsWinModalOpen(false)} />
      </div>
    </BrowserRouter>
  );
}

export default App;
