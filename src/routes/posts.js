const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middlewares");
const {
  createPost,
  getMyPost,
  getAllPosts,
  updatePost,
  deletePost,
} = require("../controllers/posts");
const { uploadS3 } = require("../middlewares/multer");

//create post
router.post(
  "/post/create",
  verifyToken,
  uploadS3.single("blogimg"),
  createPost
);

//get my post
router.get("/post/mypost/:id", getMyPost);

//get all posts
router.get("/post/allpost", getAllPosts);

//update post
router.put("/post/update", verifyToken, updatePost);

//delete post
router.delete("/post/delete/:id", verifyToken, deletePost);

module.exports = router;
