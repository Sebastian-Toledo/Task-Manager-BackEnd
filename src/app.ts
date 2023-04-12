import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes";
import db from "./config/mongo";
import bodyParser from "body-parser";

const PORT = process.env.PORT || 4000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(router);
db().then(() => console.log("Conexion Ready"));

app.listen(PORT, () => console.log(`levantado en el puesto ${PORT}`));
