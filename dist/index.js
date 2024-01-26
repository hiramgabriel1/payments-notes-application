"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongo_config_1 = __importDefault(require("./config/mongo.config"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
dotenv_1.default.config();
(0, mongo_config_1.default)();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use((0, morgan_1.default)("dev"));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(user_routes_1.default);
const bootstrap = () => {
    try {
        app.listen(port);
    }
    catch (error) {
        console.error(error);
    }
};
bootstrap();
//# sourceMappingURL=index.js.map