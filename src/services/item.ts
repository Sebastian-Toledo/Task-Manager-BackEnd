import { Car } from "../Interface/car.interface";
import itemModel from "../models/item";

const insertCar = async (item: Car) => {
  const responseInsert = await itemModel.create(item);
  return responseInsert;
};

const getCars = async () => {
  const responseItem = await itemModel.find({});
  return responseItem;
};

const getCar = async (id: string) => {
  const responseItem = await itemModel.findOne({ _id: id });
  return responseItem;
};

export { insertCar, getCars, getCar };
