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
      default:
        "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
