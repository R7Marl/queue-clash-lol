import { Router } from 'express';
import { addGameController } from './game-controller.js';
import { validateRegion } from '../middleware/game-validation.js';

const router = Router();
router.post('/add', validateRegion, addGameController);

export default router;
