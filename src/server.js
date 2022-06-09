import express from "express";

const app = express();

const PORT = 4000;

const routerLogger = (req, res, next) => { // 
  next();
};
const methodLogger = (req, res, next) => {
  next();
};

const home = (req, res, next) => res.send("hello");

app.get("/ass", methodLogger, routerLogger, home);

app.listen(PORT, handleListening);

function handleListening() {
  console.log(`Server listening on port http://localhost:${PORT}`);
}
