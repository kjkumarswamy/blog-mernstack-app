import React, { useEffect, useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import {
  getMyPostsAction,
  deletePostAction,
  updatePostAction,
} from "../../redux/action/post.Action";
import moment from "moment";

const SinglePost = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { loading, myposts, error } = useSelector((state) => state.myPost);
  const { user } = useSelector((state) => state.getUser);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  const id = location.pathname.split("/")[2];
  useEffect(() => {
    if (id) {
      dispatch(getMyPostsAction(id));
    }
    setTitle(myposts.title);
    setDesc(myposts.desc);
  }, [dispatch, id, myposts.title, myposts.desc]);

  const handleDelete = () => {
    const value = window.confirm("Do you want to delete");
    if (value) {
      dispatch(deletePostAction(myposts._id));
    }
  };

  const updatePostHandler = () => {
    const user = { title, desc, id };
    dispatch(updatePostAction(user));
  };

  return (
    <>
      <div className="singlePost">
        <div className="singlePostWrapper">
          {loading ? (
            <h2>Please Wait... Loading...!</h2>
          ) : error ? (
            <h2>{error}</h2>
          ) : (
            <>
              <img
                src={
                  myposts.photo
                    ? `http://localhost:5050/public/${myposts.photo}`
                    : null
                }
                alt=""
                className="singlePostImg"
              />
              {updateMode ? (
                <input
                  type="text"
                  autoFocus
                  className="singlePostTitleInput"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              ) : (
                <h1 className="singlePostTitle">
                  {myposts.title}
                  {user._id && myposts.userId ? (
                    user._id === myposts.userId._id ? (
                      <div className="singlePostEdit">
                        <i
                          className="singlePostIcon far fa-edit"
                          onClick={() => setUpdateMode(true)}
                        ></i>
                        <span>
                          <i
                            onClick={handleDelete}
                            className="singlePostIcon far fa-trash-alt"
                          ></i>
                        </span>
                      </div>
                    ) : null
                  ) : null}
                </h1>
              )}

              <div className="singlePostInfo">
                <span className="singlePostAuthor">
                  Author:
                  <b>{myposts.userId ? myposts.userId.username : null}</b>
                </span>
                <span className="singlePostDate">
                  {moment(myposts.updatedAt).fromNow()}
                </span>
              </div>
              {updateMode ? (
                <>
                  <textarea
                    className="singlePostDescInput"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                  />
                  <button
                    className="singPostUpdateButton"
                    onClick={updatePostHandler}
                  >
                    Update Post
                  </button>
                </>
              ) : (
                <p className="singlePostDesc">{myposts.desc}</p>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SinglePost;
