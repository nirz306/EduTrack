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

// Custom styling for the table
const StyledTableContainer = styled(TableContainer)({
  backgroundColor: 'black', // Table background color
  color: 'white', // Text color for the table
});

const StyledTableCell = styled(TableCell)({
  color: 'white', // Text color for the cells
  borderColor: 'white', // Border color for the cells
});

export default function Dashboard() {
  const [attendanceData, setAttendanceData] = useState([]);

  // Fetch attendance data using axios when the component mounts
  useEffect(() => {
    axios
      .get('http://localhost:8080/dashboard', {
        params: { studentId: 1 } // Replace 1 with the actual student ID you want to fetch
      })
      .then(response => {
        setAttendanceData(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the attendance data!", error);
      });
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <StyledTableContainer component={Paper} style={{ width: '600px' }}>
      <Table sx={{ minWidth: 300 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Subjects</StyledTableCell>
            <StyledTableCell align="right">Total Present Absent</StyledTableCell>
            <StyledTableCell align="right">Percentage&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {attendanceData.length > 0 ? (
            attendanceData.map((att, index) => (
              <TableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {att.subjectName} {/* Use subject name from attendance data */}
                </StyledTableCell>
                
                <StyledTableCell align="right">{att.totalPresentAbsent}</StyledTableCell>
				<StyledTableCell align="right">{att.percentage}%</StyledTableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <StyledTableCell colSpan={3} align="center">
                No attendance data available
              </StyledTableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
}
