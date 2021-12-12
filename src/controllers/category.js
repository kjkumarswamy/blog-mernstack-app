const Category = require("../models/Categories");

//create category
exports.createCategory = async (req, res) => {
  try {
    const newCat = new Category({
      name: req.body.name,
    });
    await newCat.save();
    res.status(201).json({ message: "Create category" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

//delete category
exports.deleteCategory = async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.body._id);
    res.status(200).json({ message: "Category Deleted successfully" });
  } catch (error) {
    return res.status(400).json({ error: error.messae });
  }
};
