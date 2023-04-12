import { Request, Response } from "express";
import { handleHTTP } from "../utils/error.handle";

const getItem = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHTTP(res, "ERROR_GET_BLOG");
  }
};

const getItems = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHTTP(res, "ERROR_GET_BLOGS");
  }
};

const upDateItem = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHTTP(res, "ERROR_UPDATE_BLOG");
  }
};

const postItem = ({ body }: Request, res: Response) => {
  try {
    res.send(body);
  } catch (e) {
    handleHTTP(res, "ERROR_POST_BLOG");
  }
};

const deleteItem = (req: Request, res: Response) => {
  try {
  } catch (e) {
    handleHTTP(res, "ERROR_DELETE_BLOG");
  }
};

export { getItem, getItems, upDateItem, postItem, deleteItem };
