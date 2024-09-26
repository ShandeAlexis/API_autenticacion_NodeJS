import dotevn from 'dotenv';
dotevn.config()
import express from 'express';
import authRoutes from './routes/authRoutes'
const app = express();

app.use(express.json())

//Routes
app.use('/auth', authRoutes)
//Auth

//User


export default app