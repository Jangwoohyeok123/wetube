import express from "express";
import {join} from "../controllers/userController";
import { trending } from "../controllers/vidoeController";

const globalRouter = express.Router();

// import한 controller 사용
globalRouter.get("/", trending);
globalRouter.get("/join",join);

export default globalRouter;