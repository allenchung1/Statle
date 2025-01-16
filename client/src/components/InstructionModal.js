import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60vw',            // Set the width to 75% of the viewport width
  height: '50vh',           // Set the height to 75% of the viewport height
  //maxWidth: 800,
  //maxHeight: 600,
  bgcolor: '#282c34',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const instructionModal = ({ isOpen, onClose }) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box sx={modalStyle}>
        <Typography variant="h1" sx={{ fontFamily: '-apple-system', fontWeight: 'bold', textAlign: 'center', color: 'white' }} gutterBottom >
          How To Play
        </Typography>
        <Typography variant="h4" sx={{ fontFamily: 'Trebuchet MS', textAlign: 'center', color: 'white' }} gutterBottom >
          Guess the American state in 5 tries.
          A green color in a column means you are very close or you are correct.
          A yellow color in the column means you are close.
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
                backgroundColor: 'rgb(25, 50, 50)',
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
                backgroundColor: 'rgb(25, 50, 50)',
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


export default instructionModal;