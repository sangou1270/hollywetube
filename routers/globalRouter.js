import express from "express";
import routes from "../routes";
import { join, login, logout } from "../controllers/userController";
import { home, search } from "../controllers/videoController";
const globarRouter = express.Router();

globarRouter.get(routes.home, home);
globarRouter.get(routes.search, search);
globarRouter.get(routes.join, join);
globarRouter.get(routes.login, login);
globarRouter.get(routes.logout, logout);

export default globarRouter;
