import React from 'react';
import Dashboard from "./components/Dashboard";
import AttendanceButton from "./components/AttendanceButtons";
import TotalPresentTotalAbsentButton from "./components/TotalPresentTotalAbsentButton";
import BasicTable from "./components/BasicTable";

import Dashboard from "./components/Dashboard"
import Datewise from "./components/Datewise";

import ReactDOM from 'react-dom';
import './index.css';

import { Sidenav, Nav, IconButton } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group'; // Change this if you want different icons
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import MenuIcon from '@rsuite/icons/Menu'; // Icon for collapse

const App = () => {
  const [expanded, setExpanded] = React.useState(true);
  const [activeKey, setActiveKey] = React.useState('1');


  return (
    <>
  

  
  <Dashboard/>
  
  
  



	  

  <div className='flex align-center'>
    <div style={{ width: 240 }}>
      <IconButton 
        icon={<MenuIcon style={{ color: '#293d75' }} />} 
        onClick={() => setExpanded(!expanded)} 
        appearance="subtle" 
        style={{ marginBottom: 10 }} 
      />
      {/* <hr /> */}
      <Sidenav 
        expanded={expanded} 
        style={{ backgroundColor: '#293d75' }} // Set navbar background color
      >
        <Sidenav.Body>
          <Nav 
            activeKey={activeKey} 
            onSelect={setActiveKey} 
            style={{ color: '#293d75' }} // Set text color to white
          >
            <Nav.Item 
              eventKey="1" 
              icon={<DashboardIcon style={{ color: '#293d75' }} />} // White icons
              style={{ color: '#293d75' }} // White text
            >
              Dashboard
            </Nav.Item>
            <Nav.Item 
              eventKey="2" 
              icon={<GroupIcon style={{ color: '#293d75' }} />} // Icon for "Datewise attendance"
              style={{ color: '#293d75' }}
            >
              Datewise Attendance
            </Nav.Item>
            <Nav.Item 
              eventKey="3" 
              icon={<MagicIcon style={{ color: '#293d75' }} />} // Icon for "Accounts"
              style={{ color: '#293d75' }}
            >
              Accounts
            </Nav.Item>
            <Nav.Item 
              eventKey="4" 
              icon={<GearCircleIcon style={{ color: '#293d75' }} />} // Icon for another item
              style={{ color: '#293d75' }}
            >
              Settings
            </Nav.Item>
          </Nav>
        </Sidenav.Body>
        {/* <Sidenav.Toggle onToggle={expanded => setExpanded(expanded)} /> */}
      </Sidenav>

    </div>
    <div>
    <h1 className = " text-3xl flex justify-center items-center text-[#293d75] mt-4">Welcome to the Student Attendance Management System</h1>
    <div className="flex justify-center items-center mt-10">
   <Dashboard/>
   </div>
   </div>
   </div>
    </>
  );
};

// ReactDOM.render(<App />, document.getElementById('root'));
export default App;




 