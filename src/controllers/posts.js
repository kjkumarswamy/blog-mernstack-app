const Post = require("../models/Posts");

//create post
exports.createPost = async (req, res) => {
  try {
    const postObj = {
      title: req.body.title,
      desc: req.body.desc,
      userId: req.user._id,
    };

    if (req.file) {
      postObj.photo = req.file.filename;
    }

    const newPost = new Post(postObj);
    const post = await newPost.save();
    res.status(201).json({ post });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

//get my post
exports.getMyPost = async (req, res) => {
  try {
    const post = await Post.findById({ _id: req.params.id }).populate(
      "userId",
      "username profilePicture email"
    );

    res.status(200).json({ post });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

//get all posts
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({}).sort({ $natural: -1 });
    return res.status(200).json({ posts });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

//update post
exports.updatePost = async (req, res) => {
  try {
    const { post } = req.body;
    const updatedPost = await Post.findByIdAndUpdate(
      post.id,
      {
        $set: {
          title: post.title,
          desc: post.desc,
        },
      },
      { new: true }
    );
    res.status(200).json({ updatedPost });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

//delete post
exports.deletePost = async (req, res) => {
  try {
    await Post.findByIdAndDelete({ _id: req.params.id });
    return res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
