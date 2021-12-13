import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import "./style.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import {
  updateUserAction,
  deleteUserAction,
} from "../../redux/action/user.Action";
import { useDispatch, useSelector } from "react-redux";

const Settings = () => {
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.updateUser);
  const { user } = useSelector((state) => state.getUser);
  const [image, setImage] = useState("");
  const [username, setUsername] = useState(user ? user.username : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [password, setPassword] = useState("");

  const userUpdateHandle = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("profileImg", image);
    formData.append("username", username);
    formData.append("email", email);

    if (password) {
      formData.append("password", password);
    }
    dispatch(updateUserAction(formData));
  };

  const deleteHandler = () => {
    const value = window.confirm("Do you want to delete");
    if (value) {
      dispatch(deleteUserAction());
    }
  };

  return (
    <Layout>
      <div className="settings">
        <div className="settingsWrapper">
          {loading ? <h2>Updating User...</h2> : null}
          <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle" onClick={deleteHandler}>
              Delete Your Account
            </span>
          </div>
          <form className="settingsForm" onSubmit={userUpdateHandle}>
            <label>Profile Picture</label>
            <div className="settingsPP">
              <img
                src={
                  image
                    ? URL.createObjectURL(image)
                    : user.profilePicture
                    ? user.profilePicture
                    : null
                }
                alt=""
              />
              <label htmlFor="fileInput">
                <i className="settingsPPIcon far fa-user-circle"></i>
              </label>
              <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
            <label>Username</label>
            <input
              type="text"
              placeholder="Kumar"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
            <label>Email</label>
            <input
              type="email"
              placeholder="email@123.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <button type="submit" className="settingsSubmit">
              Update
            </button>
          </form>
        </div>
        <Sidebar />
      </div>
    </Layout>
  );
};

export default Settings;
