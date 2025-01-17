import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import InstructionModal from './components/InstructionModal';
import GameTable from './components/GameTable';
import { Typography, TextField, Button, Autocomplete } from '@mui/material';
import { getSearchResults, postGuess } from './api';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [inputText, setInputText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [guesses, setGuesses] = useState([]);

  const handleLookUp = (e, newValue) => {
    const value = newValue || '';
    setInputText(value);
  };

  const makeGuess = (e) => {
    // some logic to ensure inputText isnt empty
    // you already guessed that logic?
    // guess with no match logic
    postGuess({ guess: inputText }).then((res) => {
      if (res.data) {
        console.log('Guess submitted', res.data);
        setGuesses([...guesses, res.data]);
      }
    });
  };

  useEffect(() => {
    console.log('Guesses updated:', guesses);
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
  

  return (
    <BrowserRouter>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          /*justifyContent: 'center',*/
          height: '100vh',
          backgroundColor: 'rgb(30,40,40',
          //backgroundColor: '#CCCCFF',
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
          onClick={() => setIsModalOpen(true)}
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
        <InstructionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        <GameTable />
        
      </div>
    </BrowserRouter>
  );
}

export default App;
