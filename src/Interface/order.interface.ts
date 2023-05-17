import { Modify } from "./modify.interface";

export interface Order {
  title: string;
  author: string;
  dateCurrent: Date;
  estimatedTime: number;
  description: string;
  deadLine: Date;
  employee: "Ilay" | "Vero" | "Gabi" | "Dario" | "Flor" | "Fran";
  budget: number;
  stateOrder:
    | "In Process"
    | "Finished"
    | "Delivered"
    | "Canceled"
    | "En Proceso"
    | "Terminados"
    | "Entregados"
    | "Anulados";
  cashAdvance: number;
  phone: string;
  modify: Modify[];
}
