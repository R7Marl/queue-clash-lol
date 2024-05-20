import { Router } from 'express';
import LRouter from './SignIn/SignIn.js';
import RRouter from './SignUp/SignUp.js';
const router = Router();

router.use('/user', LRouter);
router.use('/user', RRouter);

export default router;