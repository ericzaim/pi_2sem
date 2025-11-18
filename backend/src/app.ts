import express from 'express';
import routes from './routes/user.routes';
import authRoutes from './routes/auth.routes';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const port = 3000;

app.use(express.json());
app.use(cors());

app.use('/api',routes);
app.use('/api',authRoutes);

app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
})