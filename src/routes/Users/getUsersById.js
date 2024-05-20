import { Router } from "express";
import getUserByEmailController  from "../../controllers/AuthControllers/Users/getUser.js";
const userRouter = Router();

userRouter.get("/find/:email", getUserByEmailController);
export default userRouter