import express from 'express';
import cors from 'cors';
import indexRoute from './routes/index.js';
const app = express();
app.use(cors());
app.use(indexRoute);
export default app;