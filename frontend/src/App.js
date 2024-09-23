import React from 'react';
import AttendanceButton from "./components/AttendanceButtons";
import TotalPresentTotalAbsentButton from "./components/TotalPresentTotalAbsentButton";

function App() {
  return (
    <div>
      <h1>Welcome to the Student Attendance Management System</h1>
	  <AttendanceButton/>
	  <TotalPresentTotalAbsentButton/>
    </div>
  );
}

export default App;
