import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from'./server/config/db.js'
import articlerouter from './server/routes/articlerouter.js'
const app=express();
// connect to mongoose
connectDB();
app.use(cors());
app.use(express.json());
app.use('/api/articles',articlerouter);
const port=5000;
app.listen(port,()=>{
    console.log(`server is running on port${port}`)
})