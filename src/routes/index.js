import { Router } from 'express';
import AuthRouter from './Auth/index.js';
import QueueRouter from './Queue/index.js';
import GameRouter from './Game/gameRoutes.js';
const indexRoute = Router();

indexRoute.use('/api', AuthRouter);
indexRoute.use('/api', QueueRouter);
indexRoute.use('/api', GameRouter);
export default indexRoute;