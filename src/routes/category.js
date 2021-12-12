const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middlewares");
const { createCategory, deleteCategory } = require("../controllers/category");

//create category
router.post("/category/create", verifyToken, createCategory);

//get all categoy
router.delete("/category/delete", verifyToken, deleteCategory);

module.exports = router;
