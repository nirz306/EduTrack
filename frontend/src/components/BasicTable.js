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

 const StyledTableContainer = styled(TableContainer)({
  backgroundColor: 'blue',  
});

const StyledTableCell = styled(TableCell)({
  color: 'white', 
  borderColor: 'white',  
});

const StyledTableRow = styled(TableRow)({
  backgroundColor: 'blue', 
});

export default function BasicTable() {
  const [attendanceData, setAttendanceData] = useState([]);

   
  useEffect(() => {
    axios
      .get('http://localhost:8080/attendance', {
        params: { studentId: 1 }  
      })
      .then(response => {
        setAttendanceData(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the attendance data!", error);
      });
  }, []);  
  return (
    <StyledTableContainer component={Paper} style={{ width: '600px' }}>
      <Table sx={{ minWidth: 300 }} aria-label="simple table">
        <TableHead>
          <StyledTableRow>
            <StyledTableCell>Subjects</StyledTableCell>
            <StyledTableCell align="right">Attendance</StyledTableCell>
            <StyledTableCell align="right">Lectures attended&nbsp;</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {attendanceData.length > 0 ? (
            attendanceData.map((att, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {att.subjectName} { }
                </StyledTableCell>
                <StyledTableCell align="right">{att.status}</StyledTableCell>
                <StyledTableCell align="right">{att.lecturesAttended}</StyledTableCell>
              </StyledTableRow>
            ))
          ) : (
            <StyledTableRow>
              <StyledTableCell colSpan={3} align="center">
                No attendance data available
              </StyledTableCell>
            </StyledTableRow>
          )}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
}
