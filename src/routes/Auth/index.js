import { Router } from 'express';
import LRouter from './SignIn/SignIn.js';
import RRouter from './SignUp/SignUp.js';
const router = Router();

router.use('/signin', LRouter);
router.use('/signup', RRouter);

export default router;