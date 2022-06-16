import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: String,
  description: String,
  createdAt: Date,
  hashtags: [{ type: String}],
});

const Video = mongoose.model("Video", videoSchema); // videoSchema 모델의 데이터베이스를 가리키는 movieModel 개체를 만듦

export default Video;
