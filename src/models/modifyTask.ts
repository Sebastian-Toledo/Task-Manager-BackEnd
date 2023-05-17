import mongoose from "mongoose";
import { Modify } from "../Interface/modify.interface";

const { Schema, model } = mongoose;

const ModifySchema = new Schema<Modify>(
  {
    description: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    dateChange: {
      type: String,
      required: true,
    },
    previewDate: {
      type: String,
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
