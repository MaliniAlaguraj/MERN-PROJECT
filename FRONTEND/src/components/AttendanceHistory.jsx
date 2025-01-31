import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const AttendanceHistory = () => {
    const [studentName, setStudentName] = useState('');
    const [attendance, setAttendance] = useState([]);

    const fetchAttendance = async () => {
        const { data } = await axios.get(`http://localhost:5000/api/attendance/history?studentName=${studentName}`);
        setAttendance(data);
    };

    return (
        <div className="container">
            <h2>Attendance History</h2>
            <input 
                type="text" 
                placeholder="Enter Student Name" 
                value={studentName} 
                onChange={(e) => setStudentName(e.target.value)} 
            />
            <button onClick={fetchAttendance}>Get Attendance</button>
            <ul>
                {attendance.map((entry, index) => (
                    <li key={index}>{entry.studentName} - {entry.status} ({new Date(entry.date).toLocaleDateString()})</li>
                ))}
            </ul>
        </div>
    );
};

export default AttendanceHistory;
