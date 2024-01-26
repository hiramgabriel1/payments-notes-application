import { Router } from "express";
import { user } from "../controllers/user.controller";

const userController = new user();
const routerUser = Router();
const path = "/api/v1";

routerUser.get(`${path}/`, (req, res) => {
  userController.getData(req, res);
});

routerUser.post(`${path}/create-user`, (req, res) => {
  userController.createUser(req, res);
});

routerUser.delete(`${path}/delete-user/:id`, (req, res) => {
  userController.deleteUser(req, res);
});

export default routerUser;
