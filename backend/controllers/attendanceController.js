const Attendance = require('../models/attendance');

// Get All Attendance Records
const getAllAttendance = async (req, res) => {
  try {
    const attendanceRecords = await Attendance.find();
    res.json(attendanceRecords);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Record Attendance
const recordAttendance = async (req, res) => {
  const { studentName, status } = req.body;

  try {
    const newAttendance = new Attendance({
      studentName,
      status,
    });

    // Save new attendance to DB
    const savedAttendance = await newAttendance.save();
    res.json(savedAttendance);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update Attendance Status (Optional: If you want to update attendance)
const updateAttendance = async (req, res) => {
  const { id } = req.params;
  const { studentName, status } = req.body;

  try {
    const updatedAttendance = await Attendance.findByIdAndUpdate(
      id,
      { studentName, status },
      { new: true }
    );

    if (!updatedAttendance) {
      return res.status(404).json({ message: 'Attendance record not found' });
    }

    res.json(updatedAttendance);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete Attendance Record (Optional: If you want to delete a record)
const deleteAttendance = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedAttendance = await Attendance.findByIdAndDelete(id);

    if (!deletedAttendance) {
      return res.status(404).json({ message: 'Attendance record not found' });
    }

    res.json({ message: 'Attendance record deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getAllAttendance,
  recordAttendance,
  updateAttendance,
  deleteAttendance,
};

