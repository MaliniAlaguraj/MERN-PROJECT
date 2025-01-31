import React, { useState } from 'react';
import AttendanceForm from './components/AttendanceForm';
import AttendanceHistory from './components/AttendanceHistory';
import './App.css';

function App() {
    const [studentName, setStudentName] = useState('');

    return (
        <div>
            <h1>Student Attendance Tracking</h1>
            <AttendanceForm fetchAttendance={setStudentName} />
            <AttendanceHistory />
        </div>
    );
}

export default App;
