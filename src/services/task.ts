import { Order } from "../Interface/order.interface";
import taskModel from "../models/task";

const insertOrder = async (task: Order) => {
  const responseInsert = await taskModel.create(task);
  return responseInsert;
};

const getOrders = async () => {
  const responseTask = await taskModel.find({});
  return responseTask;
};

const getOrder = async (id: string) => {
  const responseTask = await taskModel.findOne({ _id: id });
  return responseTask;
};

const updateOrder = async (id: string, data: Order) => {
  const responseTask = await taskModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return responseTask;
};

const deleatOrder = async (id: string) => {
  const responseTask = await taskModel.remove({ _id: id });
  return responseTask;
};

export { insertOrder, getOrders, getOrder, updateOrder, deleatOrder };
