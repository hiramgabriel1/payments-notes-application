"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
const user_model_1 = require("../model/user.model");
class user {
    async getData(req, res) {
        try {
            const query = await user_model_1.userModel.find();
            return query
                ? res.status(200).json({ response: "success", data: query })
                : res.status(404).json({ responseError: "not found" });
        }
        catch (error) {
            res.status(500).json({ responseError: error });
        }
    }
    async createUser(req, res) {
        try {
            const { username, lastName, capitalPrestado, total, fechaPrestamo, fechaPago, paymentMethod, } = req.body;
            const dataUser = {
                username: username,
                lastName: lastName,
                capitalPrestado: capitalPrestado,
                total: total,
                fechaPrestamo: fechaPrestamo,
                fechaPago: fechaPago,
                paymentMethod: paymentMethod,
            };
            const isDataExists = await user_model_1.userModel.find({
                username: username,
                lastName: lastName,
            });
            if (isDataExists)
                return res.status(401).json({ response: "el usuario ya existe" });
            const saveData = await user_model_1.userModel.create(dataUser);
            return saveData
                ? res
                    .status(200)
                    .json({ response: "usuario guardado", details: saveData })
                : res.status(500).json({ response: "error" });
        }
        catch (error) {
            res.status(500).json({ responseError: error });
        }
    }
    async deleteUser(req, res) {
        try {
            const { id } = req.params;
            const queryId = await user_model_1.userModel.findByIdAndDelete(id);
        }
        catch (error) {
            res.status(500).json({ response: error });
        }
    }
}
exports.user = user;
//# sourceMappingURL=user.controller.js.map