const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Enter User name"],
    },
    email: {
      type: String,
      required: [true, "Enter email"],
      unique: true,
      validate: [validator.isEmail, "Please Enter valid email"],
    },
    password: {
      type: String,
      required: true,
      minLength: [8, "Password must be more than 8 charecter"],
    },
    profilePicture: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
