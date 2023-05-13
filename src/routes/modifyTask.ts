import { Router, Request, Response } from "express";
import {
  getModifyTask,
  getModifyTasks,
  upDateModifyTask,
  postModifyTask,
  deleteModifyTask,
} from "../controllers/modify";
import { logMiddleware } from "../middleware/log";

const router = Router();

router.get("/", getModifyTasks);

router.get("/:id", logMiddleware, getModifyTask);

router.put("/:id", upDateModifyTask);

router.post("/create", postModifyTask);

router.delete("/:id", deleteModifyTask);

export { router };
