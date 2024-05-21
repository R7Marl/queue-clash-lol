import { Router } from 'express';
import findMatchController from '../../../controllers/GameController/matchsControllers/matchController.js';
const matchRoutes = Router();

matchRoutes.get("/matchs", findMatchController);

export default matchRoutes;