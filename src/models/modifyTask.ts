import { Schema, model } from "mongoose";
import { Modify } from "../Interface/modify.interface";
import TaskModel from "./task";

const ModifySchema = new Schema<Modify>(
  {
    description: {
      type: String,
      required: true,
    },
    previousDate: {
      type: Date,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    dateChange: {
      type: Date,
      required: true,
    },
    employeeCharge: {
      enum: ["Ilay", "Vero", "Gabi", "Dario", "Flor", "Fran"],
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ModifyModel = model("Modify", ModifySchema);

export default ModifyModel;
