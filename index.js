import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();

const PORT = 4300;

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("Hellooo");

const handleProfile = (req, res) => res.send("profile");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ express: true }));
app.use(helmet());
app.use(morgan("dev"));

// const middleware = (req, res, next) => {
//   res.send("not happy");
// };

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
