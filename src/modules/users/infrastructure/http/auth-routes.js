import { Router } from 'express';
import { MongooseUserRepository } from '../repositories/mongoose-user-repository.js';
import { AuthController } from './auth-controller.js';
import { validateLogin, validateRegister } from '../security/auth-validation.js';

const router = Router();
const repository = new MongooseUserRepository();
const controller = new AuthController(repository);

router.post('/signin', validateLogin, controller.signin);
router.post('/signup', validateRegister, controller.signup);
router.get('/find/:email', controller.findByEmail);

export default router;
