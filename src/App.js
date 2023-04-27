import React, { useState, useEffect } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';


function App() {
  const [users, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/cars')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <Table border="1">
      <TableHead>
        <TableRow>
          <TableCell>Company</TableCell>
          <TableCell>Car</TableCell>
          <TableCell>Engine</TableCell>
          <TableCell>Geartype</TableCell>
          <TableCell>color</TableCell>
          <TableCell>MaxSpeed</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map(row => (
          <TableRow key={row.id}>
            <TableCell>{row.Company}</TableCell>
            <TableCell>{row.Car}</TableCell>
            <TableCell>{row.Engine}</TableCell>
            <TableCell>{row.Geartype}</TableCell>
            <TableCell>{row.Color}</TableCell>
            <TableCell>{row.MaxSpeed}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
export default App;