import React from 'react';
import { Modal, Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60vw',
  height: '50vh',
  bgcolor: '#282c34',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'auto',
};

export const InstructionModal = ({ isOpen, onClose }) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box sx={modalStyle}>
        <Typography variant="h1" sx={{ fontFamily: '-apple-system', fontWeight: 'bold', textAlign: 'center', color: 'white' }} gutterBottom >
          How To Play
        </Typography>
        <Typography variant="h4" sx={{ fontFamily: 'Trebuchet MS', textAlign: 'center', color: 'white' }} gutterBottom >
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

export const WinModal = ({ isOpen, onClose, answer, setUpGame }) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box sx={modalStyle}>
        <Typography variant="h4" sx={{ fontFamily: 'Trebuchet MS', textAlign: 'center', color: 'white', whiteSpace: 'pre-wrap', }} >
          {`Congratulations! You won!\n The state was: ${answer.name}.`}
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

export const LoseModal = ({ isOpen, onClose, answer, setUpGame }) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box sx={modalStyle}>
        <Typography variant="h4" sx={{ fontFamily: 'Trebuchet MS', textAlign: 'center', color: 'white', whiteSpace: 'pre-wrap', }} gutterBottom >
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