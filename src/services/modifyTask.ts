import { Modify } from "../Interface/modify.interface";
import ModifyModel from "../models/modifyTask";

const insertModify = async (data: Modify) => {
  const responseInsert = await ModifyModel.create(data);
  return responseInsert;
};

const getModifys = async () => {
  const responseTask = await ModifyModel.find({});
  return responseTask;
};

const getModify = async (id: string) => {
  const responseTask = await ModifyModel.findOne({ _id: id });
  return responseTask;
};

const updateModify = async (id: string, data: Modify) => {
  const responseTask = await ModifyModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return responseTask;
};

const deleatModify = async (id: string) => {
  const responseTask = await ModifyModel.remove({ _id: id });
  return responseTask;
};

export { insertModify, getModifys, getModify, updateModify, deleatModify };
