import { Request, Response } from "express";
import { handleHTTP } from "../utils/error.handle";
import {
  insertOrder,
  getOrders,
  getOrder,
  updateOrder,
  deleatOrder,
} from "../services/task";
import { Order } from "../Interface/order.interface";

const getTask = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getOrder(id);
    res.send(response);
  } catch (e) {
    handleHTTP(res, "ERROR_GET_TASK", e);
  }
};

const getTasks = async (req: Request, res: Response) => {
  try {
    const response = await getOrders();
    res.send(response);
  } catch (e) {
    handleHTTP(res, "ERROR_GET_TASKS", e);
  }
};

const upDateTask = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await updateOrder(id, body);
    res.send(response);
  } catch (e) {
    handleHTTP(res, "ERROR_UPDATE_TASK", e);
  }
};

const postTask = async ({ body }: Request, res: Response) => {
  //?name=Model z&color=gray&year=2023&gas=electric&description=el mejor autito&price=25700
  //console.log(req.query);
  console.log(body);

  try {
    const responseTask = await insertOrder(body);
    res.send(responseTask);
  } catch (e) {
    handleHTTP(res, "ERROR_POST_TASK", e);
  }
};

const deleteTask = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await deleatOrder(id);
    res.send(response);
  } catch (e) {
    handleHTTP(res, "ERROR_DELETE_TASK", e);
  }
};

export { getTask, getTasks, upDateTask, postTask, deleteTask };
