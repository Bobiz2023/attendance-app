const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection (make sure to update with your database URI)
mongoose.connect('mongodb://localhost/attendance-tracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Mongoose Schema
const attendanceSchema = new mongoose.Schema({
  studentName: String,
  status: String,  // Present or Absent
  date: Date,
});

const Attendance = mongoose.model('Attendance', attendanceSchema);

// Routes
app.get('/api/attendance', async (req, res) => {
  try {
    const records = await Attendance.find();
    res.json(records);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post('/api/attendance', async (req, res) => {
  const { studentName, status, date } = req.body;
  const attendance = new Attendance({
    studentName,
    status,
    date,
  });
  try {
    await attendance.save();
    res.status(201).json(attendance);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
