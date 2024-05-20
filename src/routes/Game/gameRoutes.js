import { Router } from "express";
import addGameController from "../../controllers/GameController/addGameController.js";
const GameRouter = Router();

GameRouter.post('/game/add', addGameController);

export default GameRouter;