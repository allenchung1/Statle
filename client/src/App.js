import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import InstructionModal from './components/InstructionModal';
import GameTable from './components/GameTable';
import { Typography, TextField, Button, Autocomplete } from '@mui/material';
import { getSearchResults } from './api';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [inputText, setInputText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleLookUp = (e) => {
    // const newInputText = e.target.value;
    // console.log(newInputText);
    // setInputText(newInputText);
    // if (newInputText) {
    //   getSearchResults(newInputText).then((res) => {
    //     console.log('handle lookup', res.data);
    //     setSearchResults(res.data);
    //   });
    // }
    setInputText(e.target.value);
  };

  useEffect(() => {
    if (inputText) {
      getSearchResults(inputText).then((res) => {
        console.log('USE EFFECT', res.data);
        setSearchResults(res.data);
      });
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
        <TextField
          label="Enter a state"
          value={inputText}
          variant="outlined"
          onChange={handleLookUp}
          sx={{
            width: '20%',
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
            '& .MuiOutlinedInput-root fieldset': {
              borderColor: 'white', // Outline color
            },
            '& .MuiOutlinedInput-root.Mui-focused fieldset': {
              borderColor: 'white', // Outline color when focused
            },
          }}
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
