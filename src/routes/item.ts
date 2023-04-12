import { Router, Request, Response } from "express";
import {
  deleteItem,
  getItem,
  getItems,
  postItem,
  upDateItem,
} from "../controllers/item";
import { logMiddleware } from "../middleware/log";

const router = Router();

router.get("/", getItems);

router.get("/:id", logMiddleware, getItem);

router.put("/:id", upDateItem);

router.post("/", postItem);

router.delete("/:id", deleteItem);

export { router };
