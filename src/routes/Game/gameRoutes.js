import { Router } from "express";
import addGameController from "../../controllers/GameController/addGameController.js";
import gameMiddleware from "../../middlewares/GameMiddleware/gameMiddleware.js";
const GameRouter = Router();

GameRouter.post('/game/add', gameMiddleware, addGameController);

export default GameRouter;