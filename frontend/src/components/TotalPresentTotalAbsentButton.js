import React, { useState } from 'react';
import axios from 'axios';

function TotalPresentTotalAbsentButton() {
  const [attendanceData, setAttendanceData] = useState([]);

  const fetchAttendance = () => {
	console.log('Button clicked!');  
    axios.get('http://localhost:8080/student', 	{
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
      <button onClick={fetchAttendance}>Get Total Present Total Absent</button>
      <div>
        {attendanceData.map((att, index) => (
          <div key={index}>
            <p>Name: {att.name}</p>
            <p>Subject: {att.subjectName}</p>
            <p>Total Present: {att.total_present}</p>
            <p>Total Absent: {att.total_absent}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TotalPresentTotalAbsentButton;
