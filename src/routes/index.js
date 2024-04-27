import { Router } from 'express';
import AuthRouter from './Auth/index.js';
import QueueRouter from './Queue/index.js';
const indexRoute = Router();

indexRoute.use('/api/auth', AuthRouter);
indexRoute.use('/api/queue', QueueRouter);
export default indexRoute;