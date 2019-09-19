import express from "express";
const app = express();

const PORT = 4300;

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("Hellooo");

const handleProfile = (req, res) => res.send("profile");

const betweenHome = (req, res, next) => {
  console.log("between");
  next();
};

app.use(betweenHome);

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
