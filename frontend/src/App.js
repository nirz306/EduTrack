import React from 'react';
import AttendanceButton from "./components/AttendanceButtons";
import TotalPresentTotalAbsentButton from "./components/TotalPresentTotalAbsentButton";
import BasicTable from "./components/BasicTable";
import Dashboard from "./components/Dashboard"

function App() {
  return (
    <div>
      <h1 className = " text-2xl flex justify-center items-center mt-4">Welcome to the Student Attendance Management System</h1>
      <div className="flex justify-center items-center mt-10">
	  
 
  
  <Dashboard/>
</div>


	  
    </div>
  );
}

export default App;
