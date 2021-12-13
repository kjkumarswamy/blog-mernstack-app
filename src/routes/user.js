const express = require("express");
const router = express.Router();
const { updateUser, deleteUser, getUser } = require("../controllers/user");
const { verifyToken } = require("../middlewares");
const { uploadS3 } = require("../middlewares/multer");

//update user
router.put(
  "/user/update",
  verifyToken,
  uploadS3.single("profileImg"),
  updateUser
);

//get user
router.get("/user/getuser", verifyToken, getUser);

//delete user
router.delete("/user/delete", verifyToken, deleteUser);

module.exports = router;
