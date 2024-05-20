import { Router } from 'express';
import AuthRouter from './Auth/index.js';
import QueueRouter from './Queue/index.js';
const indexRoute = Router();

indexRoute.use('/api', AuthRouter);
indexRoute.use('/api', QueueRouter);
export default indexRoute;