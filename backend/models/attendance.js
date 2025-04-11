const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  studentName: { type: String, required: true },
  status: { type: String, required: true },  // "Present" or "Absent"
  date: { type: Date, required: true },
});

const Attendance = mongoose.model('Attendance', attendanceSchema);

module.exports = Attendance;
