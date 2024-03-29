import mongoose from "mongoose";
import { Order } from "../Interface/order.interface";
import ModifyModel from "./modifyTask";

const { Schema, model } = mongoose;

const TasksSchema = new Schema<Order>(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    dateCurrent: {
      type: Date,
      required: true,
    },
    estimatedTime: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    deadLine: {
      type: Date,
      required: true,
    },
    employee: {
      type: String,
      enum: ["Ilay", "Vero", "Gabi", "Dario", "Flor", "Fran"],
      required: true,
    },
    budget: {
      type: Number,
      required: true,
    },
    stateOrder: {
      type: String,
      enum: [
        "In Process",
        "Finished",
        "Delivered",
        "Canceled",
        "En Proceso",
        "Terminados",
        "Entregados",
        "Anulados",
      ],
      required: true,
    },
    cashAdvance: {
      type: Number,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    changeDeadLine: {
      type: Date,
    },
    comment: {
      type: String,
    },
    employeeCharge: {
      type: String,
      enum: ["Ilay", "Vero", "Gabi", "Dario", "Flor", "Fran"],
    },
    previewDate: {
      type: Date,
    },
    modify: [
      {
        type: ModifyModel.schema,
        ref: "Modify",
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const TaskModel = model("Tasks", TasksSchema);

export default TaskModel;
