// // const express = require('express');
// // const dotenv = require('dotenv');
// // const cors = require('cors');
// // const connectDB = require('./config/db');
// // const attendanceRoutes = require('./routes/attendanceRoutes');

// // dotenv.config();
// // connectDB();

// // const app = express();
// // app.use(cors());
// // app.use(express.json());

// // app.use('/api/attendance', attendanceRoutes);

// // const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// require('dotenv').config();

// const app = express();
// app.use(express.json());
// app.use(cors());

// // MongoDB Connection (Updated - Removed deprecated options)
// mongoose.connect(process.env.MONGO_URI)
//     .then(() => console.log("MongoDB Connected"))
//     .catch(err => console.log("MongoDB Connection Error:", err));

// // Port Fix: Use available port or default to 5000
// const PORT = process.env.PORT || 5000;

// // Start Server (Handle Port In-Use Error)
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// }).on("error", (err) => {
//     if (err.code === "EADDRINUSE") {
//         console.log(`Port ${PORT} is already in use. Trying another port...`);
//         app.listen(PORT + 1, () => {
//             console.log(`Server running on port ${PORT + 1}`);
//         });
//     } else {
//         console.log("Server Error:", err);
//     }
// });


const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const attendanceRoutes = require('./routes/attendanceRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/attendance', attendanceRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
