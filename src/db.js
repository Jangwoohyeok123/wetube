import mongoose from "mongoose"; // 다운로드 받은 몽구스를 사용하기 위해서 import 함 어디로부터?

mongoose.connect("mongodb://127.0.0.1:27017/wetube", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

const handleOpen = () => console.log("✅ Connected to DB!!");
db.on("error", error => console.log("DB Error", error)); // on : 계속 일어날 수 있을 경우에 사용
db.once("open", handleOpen); // once 한번만 사용할 경우에 사용 // mongoose.once 와 같음
