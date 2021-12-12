import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <div className="post">
      <img
        src={post.photo ? `http://localhost:5050/public/${post.photo}` : null}
        alt=""
        className="postImg"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Life</span>
          <span className="postCat">Music</span>
        </div>

        <Link to={`/single/${post._id}`} className="postTitle">
          <span> {post.title}</span>
        </Link>

        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
};

export default Post;
