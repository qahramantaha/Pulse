import express from 'express';
import dotenv from 'dotenv';
import healthRoutes from './routes/health-routes';

dotenv.config();

const app = express();
const port = process.env.PORT || 4001;

app.use(express.json());

app.use("/", healthRoutes);

app.listen(port, () => {
    console.log("Auth Service is running on port " + port);
});