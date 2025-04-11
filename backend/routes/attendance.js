const express = require('express');
const Attendance = require('../models/attendance');
const router = express.Router();

// Get All Attendance
router.get('/', async (req, res) => {
  try {
    const attendance = await Attendance.find();
    res.json(attendance);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Record Attendance
router.post('/', async (req, res) => {
  const { studentName, status } = req.body;
  const newAttendance = new Attendance({ studentName, status });

  try {
    const savedAttendance = await newAttendance.save();
    res.json(savedAttendance);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

