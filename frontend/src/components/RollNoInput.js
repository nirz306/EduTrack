import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate to navigate after submitting

export default function RollNoInput() {
  const [rollNo, setRollNo] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to the dashboard route with the roll number as a query parameter
    navigate(`/dashboard?rollNo=${rollNo}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-500 px-4 ">
      <div className="bg-white shadow-lg rounded-lg p-16 w-4/1 max-w-4xl">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Enter Your Roll Number</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 text-base font-medium mb-2 f">Roll Number:</label>
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
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-300 text-lg font-semibold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
