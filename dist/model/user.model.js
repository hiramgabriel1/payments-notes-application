"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const user = new mongoose_1.default.Schema({
    username: {
        type: String,
        require: true,
        maxLength: 40,
    },
    lastName: {
        type: String,
        require: true,
        maxLength: 40,
    },
    capitalPrestado: {
        type: String,
        require: true,
    },
    total: {
        type: Number,
        require: true,
    },
    fechaPrestamo: {
        type: Date,
    },
    fechaPago: {
        type: Date,
    },
    paymentMethod: {
        type: String,
    },
});
exports.userModel = mongoose_1.default.model("users", user);
//# sourceMappingURL=user.model.js.map