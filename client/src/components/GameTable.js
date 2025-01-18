import { Table, TableBody, TableCell, TableHead, TableRow, Paper, TableContainer } from '@mui/material';

const GameTable = ({ guesses }) => {
  const GameTableHeader = () => {
    return (
      <TableHead>
        <TableRow sx={{ backgroundColor: 'black', height: 100, border: '2px solid white' }}>
          <TableCell size='large' align="center" sx={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>Guess</TableCell>
          <TableCell align="center" sx={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>Population</TableCell>
          <TableCell align="center" sx={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>Size</TableCell>
          <TableCell align="center" sx={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>GDP</TableCell>
          <TableCell align="center" sx={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>Region</TableCell>
        </TableRow>
      </TableHead>
    );
  };

  const GameTableBody = () => {
    return (
      <TableBody>
        {guesses.map((guess, index) => (
          <TableRow key={index} sx={{ backgroundColor: 'black', height: 100, border: '2px solid white' }}>
            <TableCell align="center" sx={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>{guess.name}</TableCell>
            <TableCell align="center" sx={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>{guess.population}</TableCell>
            <TableCell align="center" sx={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>{guess.size}</TableCell>
            <TableCell align="center" sx={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>{guess.gdp}</TableCell>
            <TableCell align="center" sx={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>{guess.region}</TableCell>
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