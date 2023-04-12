import { Router, Request, Response } from "express";
import {
  deleteTask,
  getTask,
  getTasks,
  postTask,
  upDateTask,
} from "../controllers/task";
import { logMiddleware } from "../middleware/log";

const router = Router();

router.get("/", getTasks);

router.get("/:id", logMiddleware, getTask);

router.put("/:id", upDateTask);

router.post("/create", postTask);

router.delete("/:id", deleteTask);

export { router };
