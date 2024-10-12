import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';  // Import useLocation hook
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const StyledTableContainer = styled(TableContainer)({
  backgroundColor: '#293d75',
  color: 'white',
});

const StyledTableCell = styled(TableCell)({
  color: 'white',
  borderColor: 'white',
});

export default function TeacherDashboard() {
  const [attendanceData, setAttendanceData] = useState([]);
  const location = useLocation();  // Get location object to access the state
  const subjectName = location.state?.subjectName;  // Extract subject from the state

  useEffect(() => {
    if (subjectName) {
      console.log('Selected Subject:', subjectName);
      axios
        .get('http://localhost:8080/TeacherDashboard', {
          params: { subjectName },
        })
        .then((response) => {
          setAttendanceData(response.data);
        })
        .catch((error) => {
          console.error('Error fetching attendance data:', error);
        });
    }
  }, [subjectName]);

  return (
    <StyledTableContainer component={Paper} style={{ width: '500px'}}>
      <Table sx={{ minWidth: 300 }} aria-label="attendance table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Roll No</StyledTableCell>
            
            <StyledTableCell align="right">Percentage Attendance</StyledTableCell>
        
			
			
          </TableRow>
        </TableHead>
        <TableBody>
          {attendanceData.length > 0 ? (
            attendanceData.map((att, index) => (
              <TableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {att.rollNo}
                </StyledTableCell>
                <StyledTableCell align="right">{att.percentage}</StyledTableCell>
              
              </TableRow>
            ))
          ) : (
            <TableRow>
              <StyledTableCell colSpan={4} align="center">
                No attendance data available
              </StyledTableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
}
