import React, { useState } from "react";
import "./write.css";
import Layout from "../../components/Layout/Layout";
import { createPostAction } from "../../redux/action/post.Action";
import { useDispatch, useSelector } from "react-redux";

const Write = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.createPost);

  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("blogimg", image);
    formData.append("title", title);
    formData.append("desc", desc);
    dispatch(createPostAction(formData));
  };

  return (
    <Layout>
      {loading ? (
        <h2>Loading...! Plesase wait...!</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : null}
      <div className="write">
        <img
          src={
            image
              ? URL.createObjectURL(image)
              : "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg"
          }
          className="writeImg"
          alt=""
        />

        <form className="writeForm">
          <div className="writeFormGroup">
            <label htmlFor="fileInput">
              <i className="writeIcon fas fa-plus"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={(e) => setImage(e.target.files[0])}
            />
            <input
              type="text"
              placeholder="Title"
              className="writeInput"
              autoFocus={true}
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>
          <div className="writeFormGroup">
            <textarea
              placeholder="Tell Your Story..."
              type="text"
              className="writeInput writeText"
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
            ></textarea>
          </div>
          <button className="writeSubmit" onClick={submitHandler}>
            Publish
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Write;
