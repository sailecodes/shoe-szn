import mongoose from "mongoose";

const itemSchema = mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  size: {
    type: Number,
  },
});

export default mongoose.model("Item", itemSchema);
