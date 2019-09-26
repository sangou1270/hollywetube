import express from "express";
import routes from "../routes";
import { home, search } from "../controllers/videoController";
import {
  getJoin,
  postJoin,
  login,
  logout
} from "../controllers/userController";
const globarRouter = express.Router();

globarRouter.get(routes.join, getJoin);
globarRouter.post(routes.join, postJoin);

globarRouter.get(routes.home, home);
globarRouter.get(routes.search, search);
globarRouter.get(routes.login, login);
globarRouter.get(routes.logout, logout);

export default globarRouter;
