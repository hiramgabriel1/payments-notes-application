import express, { Express } from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv"

dotenv.config()

const app: Express = express();
const port = process.env.PORT;

app.use(morgan("dev"));
app.use(cors());
app.use(express.json())

const bootstrap = () => {
  try {
    app.listen(port);
  } catch (error) {
    console.error(error);
  }
};

bootstrap();