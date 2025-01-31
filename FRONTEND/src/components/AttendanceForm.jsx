import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const AttendanceForm = ({ fetchAttendance }) => {
    const [studentName, setStudentName] = useState('');
    const [status, setStatus] = useState('Present');

    const submitHandler = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/api/attendance', { studentName, status });
        fetchAttendance(studentName);
        setStudentName('');
    };

    return (
        <div className="container">
            <h2>Mark Attendance</h2>
            <form onSubmit={submitHandler}>
                <input 
                    type="text" 
                    placeholder="Student Name" 
                    value={studentName} 
                    onChange={(e) => setStudentName(e.target.value)} 
                    required 
                />
                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="Present">Present</option>
                    <option value="Absent">Absent</option>
                </select>
                <button type="submit">Mark Attendance</button>
            </form>
        </div>
    );
};

export default AttendanceForm;
