import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Dashboard from "./components/studentDashboard";
import Datewise from "./components/Datewise";
import RollNoInput from './components/RollNoInput';
import './index.css';
import { Sidenav, Nav, IconButton } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MenuIcon from '@rsuite/icons/Menu';
import LandingPage from './components/landingpage';
import TeacherLandingPage from './components/teacherSelectSubject';
import TeacherDashboard from './components/teacherDashboard';
import TeacherDatewise from "./components/teacherDatewise";

const App = () => {
  const [expanded, setExpanded] = React.useState(true);
  const [activeKey, setActiveKey] = React.useState('1');
  const navigate = useNavigate();
  const location = useLocation();  

   
  const queryParams = new URLSearchParams(location.search);
  const rollNo = queryParams.get('rollNo');

  const handleSelect = (eventKey) => {
    setActiveKey(eventKey);
    if (eventKey === '1') {
      navigate(`/dashboard?rollNo=${rollNo}`);  
    } else if (eventKey === '2') {
      navigate(`/datewise?rollNo=${rollNo}`);  
    }
  };

  return (
    <>
      <div className="flex">
        {/* navbar */}
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

        <div className='mx-auto'>
       
          <div className="flex justify-center mx-auto mt-10">
            <Routes>
              <Route path="/" element={<LandingPage/>} />
              <Route path="/student" element={<RollNoInput />} />
              <Route path="/teacher" element={<TeacherLandingPage />} />  
              <Route path="/teacherDashboard" element={<TeacherDashboard />} />  
			  <Route path="/teacherDatewise" element={<TeacherDatewise />} /> 
              <Route path="/dashboard" element={<Dashboard rollNo={rollNo} />} />
              <Route path="/datewise" element={<Datewise rollNo={rollNo} />} /> 
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
