import React from "react";
import "./style.css";
import { useSelector } from "react-redux";

const Sidebar = ({ single }) => {
  const { user } = useSelector((state) => state.getUser);
  const { myposts } = useSelector((state) => state.myPost);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src={
            single && myposts.userId
              ? myposts.userId.profilePicture
              : user.profilePicture
              ? user.profilePicture
              : null
          }
          alt=""
          className="sidebarImg"
        />
        <p>
          <span style={{ display: "block" }}>
            Writer Name:- &nbsp;
            <b>
              {single && myposts.userId
                ? myposts.userId.username
                : user.username
                ? user.username
                : "Anand"}
            </b>
          </span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
          reprehenderit velit, provident doloribus quis molestias.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Movie</li>
          <li className="sidebarListItem">Travel</li>
          <li className="sidebarListItem">Sports</li>
          <li className="sidebarListItem">Tech</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
