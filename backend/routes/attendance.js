const express = require('express');
const { getAllAttendance, recordAttendance, updateAttendance, deleteAttendance } = require('../controllers/attendanceController');
const router = express.Router();

// Get all attendance records
router.get('/', getAllAttendance);

// Record attendance for a student
router.post('/', recordAttendance);

// Update an attendance record (Optional)
router.put('/:id', updateAttendance);

// Delete an attendance record (Optional)
router.delete('/:id', deleteAttendance);

module.exports = router;
