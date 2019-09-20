import express from "express";
import routes from "../routes";
const globarRouter = express.Router();

globarRouter.get(routes.home, (req, res) => res.send("Home"));
globarRouter.get(routes.join, (req, res) => res.send("Join"));
globarRouter.get(routes.login, (req, res) => res.send("Login"));
globarRouter.get(routes.logout, (req, res) => res.send("Logout"));
globarRouter.get(routes.search, (req, res) => res.send("Search"));

export default globarRouter;
