"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
const user_model_1 = require("../model/user.model");
class user {
    async getData(req, res) {
        try {
            const query = await user_model_1.userModel.find();
            if (query) {
                return query
                    ? res.status(200).json({ response: "success", data: query })
                    : res.status(404).json({ responseError: "not found" });
            }
        }
        catch (error) {
            res.status(500).json({ responseError: error });
        }
    }
    async createUser(req, res) {
        try {
            const { username, lastName, capitalPrestado, total, fechaPrestamo, fechaPago, paymentMethod, pagado, cancelado, daysPayment, moneyToPayment, } = req.body;
            const dataUser = {
                username: username,
                lastName: lastName,
                capitalPrestado: capitalPrestado,
                total: total,
                fechaPrestamo: fechaPrestamo,
                fechaPago: fechaPago,
                paymentMethod: paymentMethod,
                pagado: pagado,
                cancelado: cancelado,
                daysPayment: daysPayment,
                moneyToPayment: moneyToPayment,
            };
            const isDataExists = await user_model_1.userModel.findOne({
                username: dataUser.username,
                lastName: dataUser.lastName,
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
            res.json({
                response: "usuario eliminado correctamente",
                details: queryId,
            });
        }
        catch (error) {
            res.status(500).json({ response: error });
        }
    }
    async modifyDataUser(req, res) {
        try {
            const { id } = req.params;
            const newData = req.body;
            const query = await user_model_1.userModel.findOneAndUpdate({ _id: id }, { $set: newData }, { new: true });
            if (query) {
                return res
                    .status(200)
                    .json({ response: "usuario editado", details: query });
            }
        }
        catch (error) {
            res.status(500).json({ response: error });
        }
    }
    async getHistoryPaymentsByUser(req, res) {
        try {
            const query = await user_model_1.userModel.find({ pagado: true });
            res.json({ response: query });
        }
        catch (error) {
            res.status(500).json({ response: error });
        }
    }
    async getUsersCancelados(req, res) {
        try {
            const query = await user_model_1.userModel.find({ cancelado: true });
            res.json({ length: query.length, response: query });
        }
        catch (error) {
            res.status(500).json({ response: error });
        }
    }
    async getUserById(req, res) {
        try {
            const { username } = req.params;
            const query = await user_model_1.userModel.findOne({ username });
            if (!query)
                return res.json({ response: "error" });
            return res.json({ response: "user find", details: query });
        }
        catch (error) {
            res.status(500).json({ response: error });
        }
    }
}
exports.user = user;
//# sourceMappingURL=user.controller.js.map