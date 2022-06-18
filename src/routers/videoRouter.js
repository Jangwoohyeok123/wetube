import express from "express";
import {
  watch,
  getEdit,
  postEdit,
  getUpload,
  postUpload
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", watch);
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
videoRouter.route("/upload").get(getUpload).post(postUpload);
export default videoRouter;
// 파일의 일부만 export 할 수 있도록 익스포트함
