const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: ["true", "Enter title"],
      unique: true,
    },
    desc: {
      type: String,
      required: ["true", "Enter description"],
    },
    photo: {
      type: String,
      default: "",
    },
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
