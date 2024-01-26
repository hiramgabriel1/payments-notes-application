"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const userController = new user_controller_1.user();
const routerUser = (0, express_1.Router)();
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
exports.default = routerUser;
//# sourceMappingURL=user.routes.js.map