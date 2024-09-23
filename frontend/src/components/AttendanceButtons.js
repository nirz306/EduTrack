import React, { useState } from 'react';
import axios from 'axios';

function AttendanceButton() {
  const [attendanceData, setAttendanceData] = useState([]);

  const fetchAttendance = () => {
	console.log('Button clicked!');  
    axios.get('http://localhost:8080/attendance', 	{
	  params: { studentId: 1 } // Replace 1 with the actual student ID you want to fetch
	})
      .then(response => {
        setAttendanceData(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the attendance data!", error);
      });
  };

  return (
    <div>
      <button onClick={fetchAttendance}>Get Attendance</button>
      <div>
        {attendanceData.map((att, index) => (
          <div key={index}>
            <p>Name: {att.name}</p>
            <p>Subject: {att.subjectName}</p>
            <p>Date: {att.attendanceDate}</p>
            <p>Status: {att.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AttendanceButton;
