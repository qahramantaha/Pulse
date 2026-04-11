import express from 'express';
import healthRoutes from './routes/health-routes';
import authRoutes from './routes/auth-routes';
import { env } from './config/env';

const app = express();

app.use(express.json());

app.use('/', healthRoutes);
app.use('/', authRoutes);

app.listen(env.port, () => {
    console.log("Auth Service is running on port " + env.port );
});