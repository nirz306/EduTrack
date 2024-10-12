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
    <StyledTableContainer component={Paper} style={{ width: '900px'}}>
      <Table sx={{ minWidth: 300 }} aria-label="attendance table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Date</StyledTableCell>
            
            <StyledTableCell align="right">31101</StyledTableCell>
            <StyledTableCell align="right">31102</StyledTableCell>
			<StyledTableCell align="right">31103</StyledTableCell>
			<StyledTableCell align="right">31104</StyledTableCell>
			<StyledTableCell align="right">31105</StyledTableCell>
			<StyledTableCell align="right">31106</StyledTableCell>
			<StyledTableCell align="right">31107</StyledTableCell>
			<StyledTableCell align="right">31108</StyledTableCell>
			<StyledTableCell align="right">31109</StyledTableCell>
			<StyledTableCell align="right">31110</StyledTableCell>
			<StyledTableCell align="right">31111</StyledTableCell>
			<StyledTableCell align="right">31112</StyledTableCell>
			<StyledTableCell align="right">31113</StyledTableCell>
			<StyledTableCell align="right">31114</StyledTableCell>
			<StyledTableCell align="right">31115</StyledTableCell>
			<StyledTableCell align="right">31116</StyledTableCell>
			<StyledTableCell align="right">31117</StyledTableCell>
			<StyledTableCell align="right">31118</StyledTableCell>
			<StyledTableCell align="right">31119</StyledTableCell>
			<StyledTableCell align="right">31120</StyledTableCell>
			
			
          </TableRow>
        </TableHead>
        <TableBody>
          {attendanceData.length > 0 ? (
            attendanceData.map((att, index) => (
              <TableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {att.attendanceDate}
                </StyledTableCell>
                <StyledTableCell align="right">{att.s_31101}</StyledTableCell>
                <StyledTableCell align="right">{att.s_31102}</StyledTableCell>
				<StyledTableCell align="right">{att.s_31103}</StyledTableCell>
				<StyledTableCell align="right">{att.s_31104}</StyledTableCell>
				<StyledTableCell align="right">{att.s_31105}</StyledTableCell>
				<StyledTableCell align="right">{att.s_31106}</StyledTableCell>
				<StyledTableCell align="right">{att.s_31107}</StyledTableCell>
				<StyledTableCell align="right">{att.s_31108}</StyledTableCell>
				<StyledTableCell align="right">{att.s_31109}</StyledTableCell>
				<StyledTableCell align="right">{att.s_31110}</StyledTableCell>
				<StyledTableCell align="right">{att.s_31111}</StyledTableCell>
				<StyledTableCell align="right">{att.s_31112}</StyledTableCell>
				<StyledTableCell align="right">{att.s_31113}</StyledTableCell>
				<StyledTableCell align="right">{att.s_31114}</StyledTableCell>
				<StyledTableCell align="right">{att.s_31115}</StyledTableCell>
				<StyledTableCell align="right">{att.s_31116}</StyledTableCell>
				<StyledTableCell align="right">{att.s_31117}</StyledTableCell>
				<StyledTableCell align="right">{att.s_31118}</StyledTableCell>
				<StyledTableCell align="right">{att.s_31119}</StyledTableCell>
				<StyledTableCell align="right">{att.s_31120}</StyledTableCell>
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
