import mongoose, { Schema } from "mongoose";

const BillSchema = new Schema({
  dueDate: Date,
  name: String,
  amount: Number,
  createdAt: Date,
  updatedAt: Date,
});

const Bill = mongoose.model("Bill", BillSchema);

export default Bill;
