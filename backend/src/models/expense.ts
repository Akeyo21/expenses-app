import mongoose, { Schema } from "mongoose";
import Bill from "./bill";

const ExpenseSchema = new Schema({
  bill: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: Bill.name,
  },
  paidAt: Date,
  createdAt: Date,
  updatedAt: Date,
});

export const Expense = mongoose.model("Expense", ExpenseSchema);
