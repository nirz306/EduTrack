import React from 'react';
import AttendanceButton from "./components/AttendanceButtons";
import TotalPresentTotalAbsentButton from "./components/TotalPresentTotalAbsentButton";
import BasicTable from "./components/BasicTable";
import Dashboard from "./components/Dashboard"
import Datewise from "./components/Datewise";

function App() {
  return (
    <div>
      <h1 className = " text-3xl flex justify-center items-center text-[#293d75] mt-4">Welcome to the Student Attendance Management System</h1>
      <div className="flex justify-center items-center mt-10">
	  
 
  
  
  <Dashboard/>
  
  
  
</div>


	  
    </div>
  );
}

export default App;
