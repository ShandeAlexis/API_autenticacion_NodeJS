import dotevn from 'dotenv';
dotevn.config()
import express from 'express';
import authRoutes from './routes/authRoutes'
import usersRoutes from './routes/userRoutes'
const app = express();

app.use(express.json())

//Routes
app.use('/auth', authRoutes)
app.use('/users', usersRoutes)
//Auth

//User


export default app