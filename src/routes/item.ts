import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send({ data: "AHI VA LOS DATOS" });
});

export { router };
