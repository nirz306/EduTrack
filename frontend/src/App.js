import React from 'react';
import AttendanceButton from "./components/AttendanceButtons";
import TotalPresentTotalAbsentButton from "./components/TotalPresentTotalAbsentButton";
import BasicTable from "./components/BasicTable";

function App() {
  return (
    <div>
      <h1>Welcome to the Student Attendance Management System</h1>
	  <BasicTable/>
	  
    </div>
  );
}

export default App;
