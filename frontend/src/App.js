import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Dashboard from "./components/Dashboard";
import AttendanceButton from "./components/AttendanceButtons";
import TotalPresentTotalAbsentButton from "./components/TotalPresentTotalAbsentButton";
import BasicTable from "./components/BasicTable";
import Datewise from "./components/Datewise";  // Import the Datewise component
import './index.css';

import { Sidenav, Nav, IconButton } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group'; // Icon for Datewise Attendance
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import MenuIcon from '@rsuite/icons/Menu'; // Icon for collapse

const App = () => {
  const [expanded, setExpanded] = React.useState(true);
  const [activeKey, setActiveKey] = React.useState('1');
  const navigate = useNavigate(); // useNavigate hook to programmatically navigate

  const handleSelect = (eventKey) => {
    setActiveKey(eventKey);
    if (eventKey === '1') {
      navigate('/'); // Navigate to Dashboard
    } else if (eventKey === '2') {
      navigate('/datewise'); // Navigate to Datewise Attendance
    }
    // Add other routes if needed
  };

  return (
    <>
      <div className='flex align-center'>
        <div style={{ width: 240 }}>
          <IconButton
            icon={<MenuIcon style={{ color: '#293d75' }} />}
            onClick={() => setExpanded(!expanded)}
            appearance="subtle"
            style={{ marginBottom: 10 }}
          />
          <Sidenav
            expanded={expanded}
            style={{ backgroundColor: '#293d75' }}
          >
            <Sidenav.Body>
              <Nav activeKey={activeKey} onSelect={handleSelect}  style={{ color: '#293d75' }}>
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
          <h1 className="text-3xl flex justify-center items-center text-[#293d75] mt-4">
            Welcome to the Student Attendance Management System
          </h1>
          <div className="flex justify-center items-center mt-10">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/datewise" element={<Datewise />} />
              {/* Add more routes here if needed */}
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
