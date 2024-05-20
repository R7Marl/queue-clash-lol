import { Router } from 'express';
import { signin } from '../../../controllers/AuthControllers/AuthControllers.js';
import { checkLogin } from '../../../middlewares/Auth/authMiddleware.js';
const LRouter = Router();


LRouter.post('/signin', checkLogin, signin);

export default LRouter;