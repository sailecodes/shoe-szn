import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  username: {
    type: String,
  },
  cart: {
    type: [mongoose.Types.ObjectId],
    ref: "Item",
  },
});

export default mongoose.model("User", userSchema);
