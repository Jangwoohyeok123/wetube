import express from "express";
import { watch, edit } from "../controllers/vidoeController";

const videoRouter = express.Router();

videoRouter.get("/watch", watch);
videoRouter.get("/edit", edit);

export default videoRouter;
// 파일의 일부만 export 할 수 있도록 익스포트함
