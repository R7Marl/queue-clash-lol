import { Router } from 'express';
import { signup } from '../../../controllers/AuthControllers/AuthControllers.js';
import { checkRegister } from '../../../middlewares/Auth/authMiddleware.js';
const RRouter = Router();


RRouter.post('/signup', checkRegister, signup);

export default RRouter;