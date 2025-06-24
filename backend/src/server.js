import express from 'express';
import "dotenv/config"
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.route.js"
import userRoutes from "./routes/user.route.js"
import chatRoutes from "./routes/chat.route.js"

import { connectDB } from './lib/db.js';

const app = express();
const PORT = process.env.PORT;

// app.get('/api/auth/login', (req, res) => {
//     res.send('Login Route')
// })

// app.get('/api/auth/Logout', (req, res) => {
//     res.send('Logout Route')
// })

// app.get('/api/auth/signup', (req, res) => {
//     res.send('Signup Route')
// })

app.use(cors(
    {
        origin: "http://localhost:5173",
        credentials: true, // frontend can send cookies
    }
));

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/chat", chatRoutes)


app.listen(PORT, () =>{ 
    console.log(`Server running on port ${PORT}`)
    connectDB();    
});     