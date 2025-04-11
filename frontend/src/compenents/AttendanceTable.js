import React, { useState, useEffect } from "react";
import './styles.css';

function AdminDashboard() {
  const [attendance, setAttendance] = useState([]);
  const [newAttendance, setNewAttendance] = useState({
    studentName: '',
    status: 'Present',
    date: '',
  });

  useEffect(() => {
    fetch('/api/attendance')
      .then((res) => res.json())
      .then((data) => setAttendance(data));
  }, []);

  const handleAddAttendance = (e) => {
    e.preventDefault();
    const { studentName, status, date } = newAttendance;
    fetch('/api/attendance', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ studentName, status, date }),
    })
      .then((res) => res.json())
      .then((data) => {
        setAttendance([...attendance, data]);
        setNewAttendance({ studentName: '', status: 'Present', date: '' });
      });
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <div className="user-info">
          <span>Welcome, Admin!</span>
        </div>
      </div>
      
      <form onSubmit={handleAddAttendance} className="attendance-form">
        <input
          type="text"
          placeholder="Student Name"
          value={newAttendance.studentName}
          onChange={(e) => setNewAttendance({ ...newAttendance, studentName: e.target.value })}
          required
        />
        <select
          value={newAttendance.status}
          onChange={(e) => setNewAttendance({ ...newAttendance, status: e.target.value })}
        >
          <option value="Present">Present</option>
          <option value="Absent">Absent</option>
        </select>
        <input
          type="date"
          value={newAttendance.date}
          onChange={(e) => setNewAttendance({ ...newAttendance, date: e.target.value })}
          required
        />
        <button type="submit">Add Attendance</button>
      </form>

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

export default AdminDashboard;
