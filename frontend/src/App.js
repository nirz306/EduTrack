import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Dashboard from "./components/Dashboard";
import Datewise from "./components/Datewise";
import RollNoInput from './components/RollNoInput';
import './index.css';
import { Sidenav, Nav, IconButton } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MenuIcon from '@rsuite/icons/Menu';

const App = () => {
  const [expanded, setExpanded] = React.useState(true);
  const [activeKey, setActiveKey] = React.useState('1');
  const navigate = useNavigate();
  const location = useLocation(); // Get current location

  // Extract rollNo from query params
  const queryParams = new URLSearchParams(location.search);
  const rollNo = queryParams.get('rollNo');

  const handleSelect = (eventKey) => {
    setActiveKey(eventKey);
    if (eventKey === '1') {
      navigate(`/dashboard?rollNo=${rollNo}`); // Navigate to Dashboard with roll number
    } else if (eventKey === '2') {
      navigate(`/datewise?rollNo=${rollNo}`); // Navigate to Datewise Attendance with roll number
    }
  };

  return (
    <>
      <div className="flex align-center">
        <div style={{ width: 240 }}>
          <IconButton
            icon={<MenuIcon style={{ color: '#293d75' }} />}
            onClick={() => setExpanded(!expanded)}
            appearance="subtle"
            style={{ marginBottom: 10 }}
          />
          <Sidenav expanded={expanded} style={{ backgroundColor: '#293d75' }}>
            <Sidenav.Body>
              <Nav activeKey={activeKey} onSelect={handleSelect} style={{ color: '#293d75' }}>
                <Nav.Item eventKey="1" icon={<DashboardIcon style={{ color: '#293d75' }} />}>
                  Dashboard
                </Nav.Item>
                <Nav.Item eventKey="2" icon={<GroupIcon style={{ color: '#293d75' }} />}>
                  Datewise Attendance
                </Nav.Item>
              </Nav>
            </Sidenav.Body>
          </Sidenav>
        </div>

        <div>
          <h1 className="text-3xl flex justify-center items-center text-[#293d75] mt-4">
            Welcome to the Student Attendance Management System
          </h1>
          <div className="flex justify-center items-center mt-10">
            <Routes>
              <Route path="/" element={<RollNoInput />} /> {/* Roll Number Input as default */}
              <Route path="/dashboard" element={<Dashboard rollNo={rollNo} />} /> {/* Pass rollNo */}
              <Route path="/datewise" element={<Datewise rollNo={rollNo} />} /> {/* Pass rollNo */}
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
