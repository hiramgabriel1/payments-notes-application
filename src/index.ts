import express, { Express } from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv"
import connection from "./config/mongo.config";
import routerUser from "./routes/user.routes";

dotenv.config()
connection()

const app: Express = express();
const port = process.env.PORT;

// todo: middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json())

// todo: endpoints
app.use(routerUser)

const bootstrap = () => {
  try {
    app.listen(port);
  } catch (error) {
    console.error(error);
  }
};

bootstrap();