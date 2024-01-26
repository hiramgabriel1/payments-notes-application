"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const db = process.env.URI;
const connection = async () => {
    try {
        await mongoose_1.default.connect(db);
    }
    catch (error) {
        console.error(error);
    }
};
exports.default = connection;
//# sourceMappingURL=mongo.config.js.map