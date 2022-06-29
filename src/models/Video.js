import mongoose from "mongoose";

console.log(mongoose);

const videoSchema = new mongoose.Schema({ 
  title: { type: String, required: true, trim: true, maxLength: 80 },
  fileUrl: { type: String, required: true },
  description: { type: String, required: true, trim: true, minLength: 20 },
  createdAt: { type: Date, required: true, default: Date.now },
  hashtags: [{ type: String, trim: true }],
  meta: {
    views: { type: Number, default: 0, required: true },
    rating: { type: Number, default: 0, required: true },
  },
  owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
});

videoSchema.static("formatHashtags", function (hashtags) {
  return hashtags
    .split(",")
    .map(word => (word.startWith("#") ? word : `#${word}`));
});

const Video = mongoose.model("Video", videoSchema); // videoSchema 모델의 데이터베이스를 가리키는 movieModel 개체를 만듦

export default Video;
