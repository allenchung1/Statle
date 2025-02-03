import React, { useEffect, useState } from 'react';
import { Modal, Box, Button, Typography, Autocomplete, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { getSearchResults, putUserState } from '../api';
import Confetti from 'react-confetti';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80vw',
  height: '70vh',
  bgcolor: '#282c34',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
};

export const InstructionModal = ({ isOpen, onClose }) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box sx={modalStyle}>
        <Typography variant="h1" sx={{ fontFamily: '-apple-system', fontWeight: 'bold', textAlign: 'center', color: 'white' }} gutterBottom>
          How To Play
        </Typography>
        <Typography variant="h4" sx={{ fontFamily: 'Trebuchet MS', textAlign: 'center', color: 'white' }} gutterBottom>
          Guess the American state in 5 tries.
          A green color in a column means you are correct.
          A yellow color in a column means you are close.
          A red color in a column means you are wrong.
          Good luck!
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 20, marginTop: 5 }}>
          <Button 
            variant="contained" 
            sx={{ 
              height: '50px', 
              width: '200px', 
              fontSize: '25px',
              backgroundColor: 'rgb(50, 100, 200)',
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgb(50, 50, 50)',
                },
              }}
              onClick={onClose}
            >
            PLAY!
          </Button>
          <Link to="https://donorbox.org/keep-statle-alive-1" target="_blank" rel="noopener noreferrer">
            <Button 
            variant="contained" 
            sx={{ 
              height: '50px', 
              width: '200px',
              fontSize: '25px', 
              backgroundColor: 'rgb(50, 100, 200)',
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgb(50, 50, 50)',
              },
            }}
            onClick={onClose}
            >
              DONATE!
            </Button>
          </Link>
        </Box>
      </Box>
    </Modal>
  );
};

export const WinModal = ({ isOpen, onClose, answer, setUpGame, hasPutState, setHasPutState }) => {
  const [inputText, setInputText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [userState, setUserState] = useState({});

  const handleLookUp = (e, newValue) => {
    const value = newValue || '';
    setInputText(value);
  };

  const registerState = () => {
    putUserState({state: inputText }).then((res) => {
      if (res.data) {
        setInputText('');
        setHasPutState(true);
        setUserState(res.data);
      }
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

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box sx={{...modalStyle, overflow: 'hidden'}}>
      <Confetti/>
        <Typography variant="h4" sx={{ fontFamily: 'Trebuchet MS', textAlign: 'center', color: 'white', whiteSpace: 'pre-wrap' }}>
          {`Congratulations! You won!\n\n Fun fact: ${answer.fact}.`}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 20, marginTop: 5 }}>
          <Button 
            variant="contained" 
            sx={{ 
              height: '50px', 
              width: '200px', 
              fontSize: '25px',
              backgroundColor: 'rgb(50, 100, 200)',
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgb(50, 50, 50)',
                },
              }}
              onClick={() => {
                setUpGame();
                setHasPutState(false)
                setInputText('')
                onClose();
              }}
          >
            PLAY AGAIN!
          </Button>
          <Link to="https://donorbox.org/keep-statle-alive-1" target="_blank" rel="noopener noreferrer">
            <Button 
              variant="contained" 
              sx={{ 
                height: '50px', 
                width: '200px',
                fontSize: '25px', 
                backgroundColor: 'rgb(50, 100, 200)',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgb(50, 50, 50)',
                },
              }}
              onClick={onClose}
            >
              DONATE!
            </Button>
          </Link>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 5, marginTop: 10 }}>
          <Autocomplete 
            freeSolo
            disableClearable
            inputValue={inputText}
            onInputChange={handleLookUp}
            value={inputText}
            onChange={handleLookUp}
            disabled={hasPutState}
            options={searchResults.map((state) => state.name)}
            sx={{
              width: '200px',
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
                label="Represent your state!"
                variant="outlined"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    registerState();
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
            variant="contained"
            disabled={hasPutState}
            sx={{ 
              height: '50px', 
              width: '100px',
              fontSize: '20px', 
              backgroundColor: 'rgb(100, 100, 100)',
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgb(50, 50, 50)',
              },
            }}
            onClick={registerState}
          >
            Enter!
          </Button>
        </Box>
        {hasPutState && 
        <Typography 
          variant="h4" 
          sx={{ 
            fontFamily: 'Trebuchet MS', 
            textAlign: 'center', 
            color: 'white', 
            marginTop: 5
          }}
        > 
          {`There are ${userState.winnerCount} recorded winners from ${userState.name}!`} 
        </Typography>}
      </Box>
    </Modal>
  );
};

export const LoseModal = ({ isOpen, onClose, answer, setUpGame }) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box sx={modalStyle}>
        <Typography variant="h4" sx={{ fontFamily: 'Trebuchet MS', textAlign: 'center', color: 'white', whiteSpace: 'pre-wrap', }} gutterBottom>
          {`You lost!\n The answer was: ${answer.name}.\nBetter luck next time.`}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 20, marginTop: 20 }}>
          <Button 
            variant="contained" 
            sx={{ 
              height: '50px', 
              width: '200px', 
              fontSize: '25px',
              backgroundColor: 'rgb(50, 100, 200)',
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgb(50, 50, 50)',
              },
            }}
            onClick={() => {
              setUpGame();
              onClose();
            }}
          >
            PLAY AGAIN!
          </Button>
          <Link to="https://donorbox.org/keep-statle-alive-1" target="_blank" rel="noopener noreferrer">
            <Button 
              variant="contained" 
              sx={{ 
                height: '50px', 
                width: '200px',
                fontSize: '25px', 
                backgroundColor: 'rgb(50, 100, 200)',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgb(50, 50, 50)',
                },
              }}
              onClick={onClose}
            >
              DONATE!
            </Button>
          </Link>
        </Box>
      </Box>
    </Modal>
  );
};