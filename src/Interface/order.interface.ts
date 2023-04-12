export interface Order {
  title: string;
  author: string;
  dateCurrent: Date;
  estimatedTime: number;
  description: string;
  deadLine: Date;
  employee: string;
  budget: number;
  stateOrder: "In Process" | "Finished" | "Delivered" | "Annulled";
  comment?: string;
  dateChange?: Date;
  employeeCharge?: string;
  cashAdvance: number;
  phone: number;
}
