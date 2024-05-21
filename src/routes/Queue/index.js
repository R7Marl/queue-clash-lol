import { Router } from 'express';
import matchRoutes from './matchs/matchsRoutes.js';
const router = Router();

router.use("/queue", matchRoutes);


export default router;