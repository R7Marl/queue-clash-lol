import { Router } from 'express';
import authRouter from '../modules/users/infrastructure/http/auth-routes.js';
import gameRouter from '../modules/games/infrastructure/http/game-routes.js';
import matchRouter from '../modules/matchmaking/infrastructure/http/match-routes.js';

const apiRouter = Router();

apiRouter.use('/user', authRouter);
apiRouter.use('/game', gameRouter);
apiRouter.use('/queue', matchRouter);

export default apiRouter;
