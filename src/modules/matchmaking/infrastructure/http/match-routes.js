import { Router } from 'express';
import { getQueueSnapshot } from './match-controller.js';

const router = Router();
router.get('/matchs', getQueueSnapshot);

export default router;
