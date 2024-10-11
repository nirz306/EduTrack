import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  

export default function RollNoInput() {
  const [rollNo, setRollNo] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
 
    navigate(`/dashboard?rollNo=${rollNo}`);
  };

  return (
       <div className="bg-[#293d75] shadow-lg rounded-lg p-16 w-4/1 max-w-4xl">
        <h2 className="text-3xl font-semibold mb-6 text-center text-white">Enter Your Roll Number</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-white text-base font-medium mb-2 f">Roll Number:</label>
            <input
              type="text"
              value={rollNo}
              onChange={(e) => setRollNo(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-white text-[#293d75] py-2 rounded-lg hover:bg-green-600 hover:text-white transition-colors duration-300 text-lg font-semibold"
          >
            Submit
          </button>
        </form>
      </div>
   );
}
