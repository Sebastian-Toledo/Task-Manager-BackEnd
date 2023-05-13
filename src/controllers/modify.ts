import { Request, Response } from "express";
import { handleHTTP } from "../utils/error.handle";
import {
  insertModify,
  getModifys,
  getModify,
  updateModify,
  deleatModify,
} from "../services/modifyTask";

const getModifyTask = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getModify(id);
    res.send(response);
  } catch (e) {
    handleHTTP(res, "ERROR_GET_ModifyTASK", e);
  }
};

const getModifyTasks = async (req: Request, res: Response) => {
  try {
    const response = await getModifys();
    res.send(response);
  } catch (e) {
    handleHTTP(res, "ERROR_GET_ModifyTASK", e);
  }
};

const upDateModifyTask = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await updateModify(id, body);
    res.send(response);
  } catch (e) {
    handleHTTP(res, "ERROR_UPDATE_ModifyTASK", e);
  }
};

const postModifyTask = async ({ body }: Request, res: Response) => {
  try {
    const responseModifyTask = await insertModify(body);
    res.send(responseModifyTask);
  } catch (e) {
    handleHTTP(res, "ERROR_POST_ModifyTASK", e);
  }
};

const deleteModifyTask = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await deleatModify(id);
    res.send(response);
  } catch (e) {
    handleHTTP(res, "ERROR_DELETE_ModifyTASK", e);
  }
};

export {
  getModifyTask,
  getModifyTasks,
  upDateModifyTask,
  postModifyTask,
  deleteModifyTask,
};
