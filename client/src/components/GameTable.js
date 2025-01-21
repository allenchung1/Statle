import { Table, TableBody, TableCell, TableHead, TableRow, Paper, TableContainer } from '@mui/material';

const GameTable = ({ guesses, answer }) => {
  const GameTableHeader = () => {
    return (
      <TableHead>
        <TableRow sx={{ backgroundColor: 'black', height: 100, border: '2px solid white' }}>
          <TableCell align="center" sx={{ color: 'white', fontSize: 30, fontWeight: 'bold', borderLeft: '2px solid white', borderRight: '2px solid white' }}>Guess</TableCell>
          <TableCell align="center" sx={{ color: 'white', fontSize: 30, fontWeight: 'bold', borderLeft: '2px solid white', borderRight: '2px solid white' }}>Population</TableCell>
          <TableCell align="center" sx={{ color: 'white', fontSize: 30, fontWeight: 'bold', borderLeft: '2px solid white', borderRight: '2px solid white' }}>Size</TableCell>
          <TableCell align="center" sx={{ color: 'white', fontSize: 30, fontWeight: 'bold', borderLeft: '2px solid white', borderRight: '2px solid white' }}>GDP</TableCell>
          <TableCell align="center" sx={{ color: 'white', fontSize: 30, fontWeight: 'bold', borderLeft: '2px solid white', borderRight: '2px solid white' }}>Region</TableCell>
        </TableRow>
      </TableHead>
    );
  };

  const colorMap =  (guessValue, answerValue, key) => {
    if (key === 'exact') {
      if (guessValue === answerValue) {
        return 'rgb(0,100,0)';
      } else {
        return 'rgb(100,0,0)';
      }
    } else if (key === 'range') {
      if (guessValue === answerValue) {
        return 'rgb(0,100,0)';
      } else if (Math.abs(guessValue - answerValue) / answerValue <= 0.25) {
        return 'rgb(200,160,10)';
      } else {
        return 'rgb(100,0,0)';
      }
    }
  };

  const higherOrLower = (guessValue, answerValue) => {
    if (answerValue > guessValue) {
      return '⬆';
    } else if (answerValue < guessValue) {
      return '⬇';
    } else {
      return '';
    }
  };

  const GameTableBody = () => {
    return (
      <TableBody>
        {guesses.map((guess, index) => (
          <TableRow 
            key={index} 
            sx={{ 
              backgroundColor: 'black', 
              height: 100, 
              border: '2px solid white' 
            }}
          >
            <TableCell 
              align="center" 
              sx={{ 
                backgroundColor: colorMap(guess.name, answer.name, 'exact'), 
                color: 'white', 
                fontSize: 30, 
                fontWeight: 'bold',
                borderRight: '2px solid white',
                borderLeft: '2px solid white',
              }}
            >
              {guess.name}
            </TableCell>
            <TableCell 
              align="center" 
              sx={{ 
                backgroundColor: colorMap(guess.population, answer.population, 'range'), 
                color: 'white', 
                fontSize: 30, 
                fontWeight: 'bold',
                borderRight: '2px solid white',
                borderLeft: '2px solid white',
              }}
            >
              {guess.population + ' ' + higherOrLower(guess.population, answer.population)}
            </TableCell>
            <TableCell 
              align="center" 
              sx={{ 
                backgroundColor: colorMap(guess.size, answer.size, 'range'), 
                color: 'white', 
                fontSize: 30, 
                fontWeight: 'bold',
                borderRight: '2px solid white',
                borderLeft: '2px solid white',
              }}
            >
              {guess.size + ' ' + higherOrLower(guess.size, answer.size)}
            </TableCell>
            <TableCell 
              align="center" 
              sx={{ 
                backgroundColor: colorMap(guess.gdp, answer.gdp, 'range'), 
                color: 'white', 
                fontSize: 30, 
                fontWeight: 'bold',
                borderRight: '2px solid white',
                borderLeft: '2px solid white',
              }}
            >
              {guess.gdp + ' ' + higherOrLower(guess.gdp, answer.gdp)}
            </TableCell>
            <TableCell 
              align="center" 
              sx={{ 
                backgroundColor: colorMap(guess.region, answer.region, 'exact'), 
                color: 'white', 
                fontSize: 30, 
                fontWeight: 'bold',
                borderRight: '2px solid white',
                borderLeft: '2px solid white',
              }}
            >
              {guess.region}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    );
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <GameTableHeader />
        <GameTableBody />
      </Table>
    </TableContainer>
  );
};


export default GameTable;