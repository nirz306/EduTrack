import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { useLocation } from 'react-router-dom';  

 
const StyledTableContainer = styled(TableContainer)({
  backgroundColor: '#293d75',  
  color: 'white',  
});

const StyledTableCell = styled(TableCell)({
  color: 'white',  
  borderColor: 'white',  
});

export default function Datewise({ rollNo }) {
  const [attendanceData, setAttendanceData] = useState([]);


 

   
  useEffect(() => {
    if (rollNo) {  
      axios
        .get('http://localhost:8080/datewise', {
          params: { rollNo }  
        })
        .then(response => {
          setAttendanceData(response.data);
        })
        .catch(error => {
          console.error("There was an error fetching the attendance data!", error);
        });
    }
  }, [rollNo]);  

  return (
    <StyledTableContainer component={Paper} style={{ width: '600px' }}>
      <Table sx={{ minWidth: 300 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell align="right">DBMS</StyledTableCell>
            <StyledTableCell align="right">TOC</StyledTableCell>
            <StyledTableCell align="right">CNS</StyledTableCell>
            <StyledTableCell align="right">SPOS</StyledTableCell>
            <StyledTableCell align="right">HCI</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {attendanceData.length > 0 ? (
            attendanceData.map((att, index) => (
              <TableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {att.attendanceDate} { }
                </StyledTableCell>
                <StyledTableCell align="right">{att.dbms_status}</StyledTableCell>
                <StyledTableCell align="right">{att.toc_status}</StyledTableCell>
                <StyledTableCell align="right">{att.cns_status}</StyledTableCell>
                <StyledTableCell align="right">{att.spos_status}</StyledTableCell>
                <StyledTableCell align="right">{att.hci_status}</StyledTableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <StyledTableCell colSpan={6} align="center">
                No attendance data available
              </StyledTableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
}
