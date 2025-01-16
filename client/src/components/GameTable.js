import { Table, TableBody, TableCell, TableHead, TableRow, Paper, TableContainer } from '@mui/material';

const GameTable = () => {
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
        <TableRow sx={{ backgroundColor: 'black', height: 100, border: '2px solid white' }}>
          <TableCell align="center" sx={{  color: 'white', fontSize: 30, fontWeight: 'bold' }}>Alabama</TableCell>
          <TableCell align="center" sx={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>4903185</TableCell>
          <TableCell align="center" sx={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>52420</TableCell>
          <TableCell align="center" sx={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>210000</TableCell>
          <TableCell align="center" sx={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>South</TableCell>
        </TableRow>
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