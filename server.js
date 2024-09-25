import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import authRoute from './routes/authRoute.js';
import commentRoute from './routes/commentRoute.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import postRoute from './routes/postRoute.js';

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('mongodb is connected');
    })
    .catch((err) => {
        console.log(err);
    });

const app = express();



// Add this middleware to parse incoming JSON data
app.use(express.json());
app.use(cookieParser());
app.use(cors());


app.listen(3000, () => {
    console.log('server is running on port 3000');
});

app.get('/test', (req, res) => {
    res.json({ message: 'api is working' });
});
console.log('working');

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoute);
app.use('/api/post', postRoute);
app.use('/api/comment', commentRoute);

app.use((err , req , res , next)=>{
    const statusCode = err.statusCode|| 500; 
    const message = err.message|| "internal server error";
    
    
    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});

