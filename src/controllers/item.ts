import { Request, Response } from "express";
import { handleHTTP } from "../utils/error.handle";
import { insertCar, getCars, getCar } from "../services/item";
import { Car } from "../Interface/car.interface";

const getItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getCar(id);
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (e) {
    handleHTTP(res, "ERROR_GET_ITEM");
  }
};

const getItems = async (req: Request, res: Response) => {
  try {
    const response = await getCars();
    res.send(response);
  } catch (e) {
    handleHTTP(res, "ERROR_GET_ITEMS");
  }
};

const upDateItem = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHTTP(res, "ERROR_UPDATE_ITEM");
  }
};

const postItem = async ({ body }: Request, res: Response) => {
  console.log(body);

  try {
    const responseItem = await insertCar(body);
    res.send(responseItem);
  } catch (e) {
    handleHTTP(res, "ERROR_POST_ITEM", e);
  }
};

const deleteItem = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHTTP(res, "ERROR_DELETE_ITEM");
  }
};

export { getItem, getItems, upDateItem, postItem, deleteItem };
