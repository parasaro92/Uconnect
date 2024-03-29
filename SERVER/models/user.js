const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  pic: {
    type:String,
    default:'https://res.cloudinary.com/imgdb22/image/upload/v1648764856/mystery_ep5wqp.jpg'
  },
  resetToken: String,
  expireToken: Date,
  followers: [{ type: ObjectId, ref: "User" }],
  following: [{ type: ObjectId, ref: "User" }],
});

mongoose.model("User", userSchema);