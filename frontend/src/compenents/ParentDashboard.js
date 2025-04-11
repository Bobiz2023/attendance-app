import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ParentDashboard() {
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    async function fetchAttendance() {
      const res = await axios.get('http://localhost:5000/api/attendance');
      setAttendance(res.data);
    }
    fetchAttendance();
  }, []);

  return (
    <div className="dashboard">
      <h1>Parent Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {attendance.map((record) => (
            <tr key={record._id}>
              <td>{record.studentName}</td>
              <td>{record.status}</td>
              <td>{new Date(record.date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ParentDashboard;

