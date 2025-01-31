

const Attendance = require('../models/attendanceModel');

exports.markAttendance = async (req, res) => {
    try {
        const { studentName, status } = req.body;
        const attendance = new Attendance({ studentName, status });
        await attendance.save();
        res.status(201).json(attendance);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getAttendanceByStudent = async (req, res) => {
    try {
        const { studentName } = req.query;
        const attendance = await Attendance.find({ studentName });
        res.json(attendance);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
