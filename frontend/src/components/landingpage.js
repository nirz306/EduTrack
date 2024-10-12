import * as React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function LandingPage() {
  const [access, setaccess] = React.useState("");
  const navigate = useNavigate(); // Create a navigate function using useNavigate hook

  const handleChange = (event) => {
    setaccess(event.target.value);
  };

  const handleSubmit = () => {
    if (access === "Student") {
      navigate("/student");
    } else if (access === "Staff") {
      navigate("/teacher");
    } else if (access === "Admin") {
      navigate("/admin");
    }
  };

  return (
    <div>
      <h1 className="text-3xl flex justify-center items-center mx-auto  text-[#293d75] mt-10">
        Welcome to the Student Attendance Management System
      </h1>
      <div className="flex flex-col mt-3">
        <div className="text-xl">Enter your access: </div>
        <FormControl sx={{ m: 1, minWidth: 320 }} size="small">
          <InputLabel id="demo-select-small-label">Access level:</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={access}
            label="access level"
            onChange={handleChange}
          >
            <MenuItem value="Student">Student</MenuItem>
            <MenuItem value="Staff">Staff</MenuItem>
            <MenuItem value="Admin">Admin</MenuItem>
          </Select>
        </FormControl>
        <button
          className="border p-3 rounded-lg bg-[#293d75] text-white hover:bg-green-800 w-[100px] mx-auto"
          onClick={handleSubmit} 
        >
          Submit
        </button>
      </div>
    </div>
  );
}
