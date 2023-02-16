import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes";
import db from "./config/mongo";

const PORT = process.env.PORT || 4000;
const app = express();

app.use(cors());

app.use(router);

app.listen(PORT, () => console.log(`levantado en el puesto ${PORT}`));
