import { Router } from 'express';
import LRouter from './SignIn/SignIn.js';
import RRouter from './SignUp/SignUp.js';
import userRouter from '../Users/getUsersById.js';
const router = Router();

router.use('/user', LRouter);
router.use('/user', RRouter);
router.use('/user', userRouter);

export default router;