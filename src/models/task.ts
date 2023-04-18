import { Schema, Types, model, Model } from "mongoose";
import { Order } from "../Interface/order.interface";

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
      required: true,
    },
    budget: {
      type: Number,
      required: true,
    },
    stateOrder: {
      type: String,
      enum: ["In Process", "Finished", "Delivered", "Canceled"],
      required: true,
    },
    comment: {
      type: String,
    },
    dateChange: {
      type: Date,
    },
    employeeCharge: {
      type: String,
    },
    cashAdvance: {
      type: Number,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const TaskModel = model("Tasks", TasksSchema);

export default TaskModel;
