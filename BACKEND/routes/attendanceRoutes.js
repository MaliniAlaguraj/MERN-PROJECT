
const express = require('express');
const router = express.Router();
const { markAttendance, getAttendanceByStudent } = require('../controllers/attendanceController');

router.post('/', markAttendance);
router.get('/history', getAttendanceByStudent);

module.exports = router;

