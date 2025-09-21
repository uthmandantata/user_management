import express from "express";
import dotenv from "dotenv";
import dbConnect from './config/db.js';
import authRoutes from './routes/authRoutes.js'
import userRoutes from './routes/userRoutes.js'

dotenv.config()


const app = express();

// Middleware
app.use(express.json());

//Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

//Start the server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    dbConnect();
    console.log(`Server is running at port ${PORT}`);
});