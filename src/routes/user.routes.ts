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

routerUser.patch(`${path}/edit-user/:id`, (req, res) => {
  userController.modifyDataUser(req, res);
});

routerUser.get(`${path}/history`, (req, res) => {
  userController.getHistoryPaymentsByUser(req, res);
});

routerUser.get(`${path}/users-cancelados`, (req, res) => {
  userController.getUsersCancelados(req, res);
});

routerUser.get(`${path}/user/:username`, (req, res) => {
  userController.getUserById(req, res);
});
export default routerUser;
