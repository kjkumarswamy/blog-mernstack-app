import React from "react";
import Post from "../Post/Post";
import "./style.css";
import { useSelector } from "react-redux";

const Posts = () => {
  const { loading, error, posts } = useSelector((state) => state.allPost);

  return (
    <div className="posts">
      {loading ? (
        <h2>Loading... Please Wait...!</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : null}

      {posts ? posts.map((post, i) => <Post post={post} key={i} />) : null}
    </div>
  );
};

export default Posts;
