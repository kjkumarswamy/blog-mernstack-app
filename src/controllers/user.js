const User = require("../models/User");
const Post = require("../models/Posts");
const bcrypt = require("bcrypt");

//update User
exports.updateUser = async (req, res) => {
  try {
    const userObj = {
      username: req.body.username,
      email: req.body.email,
    };

    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      userObj.password = await bcrypt.hash(req.body.password, salt);
    }
    if (req.file) {
      userObj.profilePicture = req.file.location;
    }

    await User.findByIdAndUpdate(
      req.user._id,
      {
        $set: userObj,
      },
      { new: true }
    );
    res.status(200).json({ message: "User updated" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

//get User
exports.getUser = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user._id });
    res.status(200).json({ user });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

//delete User
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    await Post.deleteMany({ userId: user._id });
    await User.findByIdAndDelete(req.user._id);
    res.clearCookie("token");
    res.status(200).json({ message: "Use deleted Successfully" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
