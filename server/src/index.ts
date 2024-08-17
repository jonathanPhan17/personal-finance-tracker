import express, { Express } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import financialRecordRouter from './routes/financial-records';
import cors from 'cors';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

const mongoURI: string = process.env.MONGO_URI || '';

mongoose.connect(mongoURI)
.then(() => console.log(`CONNECTED TO MONGODB!`))
.catch((err) => console.error("failed to connect to MongoDB:", err));

app.use("/financial-records", financialRecordRouter);

app.listen(port, () => {
    console.log(`Server running on PORT ${port}`);
})