import { Schema, Types, model, Model } from "mongoose";
import { Car } from "../Interface/car.interface";

const ItemsSchema = new Schema<Car>(
  {
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    gas: {
      type: String,
      enum: ["gasolina", "electric"],
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const itemModel = model("items", ItemsSchema);

export default itemModel;
