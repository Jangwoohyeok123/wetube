import express from "express";

const app = express();
const PORT = 4000;

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1>Not Allowed</h1>");
  }
  next();
};

const handleProtected = (req, res) => {
  return res.send("Welcome to the private lounge.");
};

const handleHome = (req, res) => {
  return res.send("I love middlewares");
};

app.use(logger);
app.use(privateMiddleware);
app.get("/", handleHome); // handleHome은 next 함수가 됨
app.get("/protected", handleProtected);

const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
