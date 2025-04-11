import React, { useState, useEffect } from "react";
import './styles.css';

function AdminDashboard() {
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    fetch('/api/attendance')
      .then((res) => res.json())
      .then((data) => setAttendance(data));
  }, []);

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <div className="user-info">
          <span>Welcome, Admin!</span>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Status</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {attendance.map((record) => (
            <tr key={record._id}>
              <td>{record.studentName}</td>
              <td>{record.status}</td>
              <td>{new Date(record.date).toLocaleDateString()}</td>
              <td><button>Mark Present</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;
