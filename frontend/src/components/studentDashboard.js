import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useNavigate and useLocation
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Navbar from './navbar';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard'; // Import icons
import GroupIcon from '@rsuite/icons/legacy/Group'; // Import icons

const StyledTableContainer = styled(TableContainer)({
  backgroundColor: '#293d75',
  color: 'white',
});

const StyledTableCell = styled(TableCell)({
  color: 'white',
  borderColor: 'white',
});

export default function Dashboard({ rollNo }) {
  const [attendanceData, setAttendanceData] = useState([]);
  const [expanded, setExpanded] = useState(true);
  const [activeKey, setActiveKey] = useState('1');
  const navigate = useNavigate(); // useNavigate hook inside the component
  const location = useLocation(); // useLocation hook inside the component

  // Handle menu selection
  const handleSelect = (eventKey) => {
    setActiveKey(eventKey);
    if (eventKey === '1') {
      navigate('/dashboard?rollNo=${rollNo}');
    } else if (eventKey === '2') {
      navigate('/datewise?rollNo=${rollNo}');
    }
  };

  // Define menu items to send as props
  const menuItems = [
    { eventKey: '1', label: 'Dashboard', icon: <DashboardIcon style={{ color: '#293d75' }} /> },
    { eventKey: '2', label: 'Datewise Attendance', icon: <GroupIcon style={{ color: '#293d75' }} /> }
  ];

  // Fetch attendance data using axios when the component mounts
  useEffect(() => {
    if (rollNo) {
      axios
        .get('http://localhost:8080/dashboard', {
          params: { rollNo }, // Use the rollNo passed from the parent component
        })
        .then((response) => {
          setAttendanceData(response.data);
        })
        .catch((error) => {
          console.error('There was an error fetching the attendance data!', error);
        });
    }
  }, [rollNo]);

  return (
    <div className='flex'>
      <Navbar
        handleSelect={handleSelect}
        activeKey={activeKey}
        expanded={expanded}
        setExpanded={setExpanded}
        menuItems={menuItems} // Pass menu items as props
      />
      <div className='mx-auto mt-[100px] '>
          <div className='text-xl text-[#293d75] mb-2 '>Welcome Student {rollNo}</div>
      <StyledTableContainer component={Paper} style={{ width: '600px' }}>
        <Table sx={{ minWidth: 300 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Subjects</StyledTableCell>
              <StyledTableCell align="right">Present</StyledTableCell>
              <StyledTableCell align="right">Total Lectures</StyledTableCell>
              <StyledTableCell align="right">Percentage&nbsp;</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {attendanceData.length > 0 ? (
              attendanceData.map((att, index) => (
                <TableRow key={index}>
                  <StyledTableCell component="th" scope="row">
                    {att.subjectName}
                  </StyledTableCell>
                  <StyledTableCell align="right">{att.totalPresent}</StyledTableCell>
                  <StyledTableCell align="right">{att.totalLectures}</StyledTableCell>
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
      </div>
    </div>
  );
}