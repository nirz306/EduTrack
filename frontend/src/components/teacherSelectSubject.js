import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate from react-router-dom
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function TeacherLandingPage() {
  const [subjectName, setSubject] = useState('');

  const navigate = useNavigate(); 

  const handleChange = (event) => {
    setSubject(event.target.value);
  };

  const handleSubmit = () => {
    if (subjectName) {
      navigate('/teacherDashboard', { state: { subjectName } });  // Pass the subject as state
    } else {
      alert('Please select a subject.');
    }
  };
  
  

   
 

  return (
    <div>
	
      <h1 className="text-3xl flex justify-center items-center mx-auto text-[#293d75] mt-10">
        Welcome Teacher
      </h1>
      <div className='flex flex-col mt-5 w-[500px] mx-auto'>
        <div className='text-xl'>Enter your Subject:</div>
        <FormControl sx={{ m: 1, minWidth: 320 }} size="small">
          <InputLabel id="demo-select-small-label">Subjects:</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={subjectName}
            label="SubjectName"
            onChange={handleChange}
          >
            <MenuItem value="Dbms">DBMS</MenuItem>
            <MenuItem value="Toc">TOC</MenuItem>
            <MenuItem value="Spos">SPOS</MenuItem>
            <MenuItem value="Cns">CNS</MenuItem>
            <MenuItem value="Hci">HCI</MenuItem>
          </Select>
        </FormControl>
        <button
          className='border p-3 rounded-lg bg-[#293d75] text-white hover:bg-green-800 w-[100px] mx-auto'
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
