import React, { useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../redux/action/auth.Action";
import jwt_decode from "jwt-decode";

const Topbar = () => {
  const dispatch = useDispatch();
  const { authenticate } = useSelector((state) => state.authState);
  const { user } = useSelector((state) => state.getUser);
  const logoutHandler = () => {
    dispatch(logoutAction());
  };

  useEffect(() => {
    //logout if jwt expires
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = jwt_decode(token);
        const time = decodedToken.exp * 1000 < new Date().getTime();
        if (time) {
          alert("session time out");
          dispatch(logoutAction());
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, [dispatch]);

  const renderLoggedInLinks = () => {
    return (
      <>
        <span>{user.username}&nbsp;</span>
        <Link to="/settings">
          <img
            className="topImg"
            src={
              user.profilePicture
                ? `http://localhost:5050/public/${user.profilePicture}`
                : "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
            }
            alt=""
          />
        </Link>
        <i className="topSearchIcon fas fa-search"></i>
        <button className="topListLogout" onClick={logoutHandler}>
          LOGOUT
        </button>
      </>
    );
  };

  const renderNonLoggedInLinks = () => {
    return (
      <>
        <Link to="/login">
          <button className="topListLogout">LOGIN</button>
        </Link>
        <Link to="/register">
          <button className="topListLogout">REGISTER</button>
        </Link>
      </>
    );
  };

  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <Link to="/" className="linkStyle">
            <li className="topListItem">HOME</li>
          </Link>

          <Link to="/write" className="linkStyle">
            <li className="topListItem">WRITE</li>
          </Link>
          <Link to="/about" className="linkStyle">
            <li className="topListItem">ABOUT</li>
          </Link>
          <Link to="/contact" className="linkStyle">
            <li className="topListItem">CONTACT</li>
          </Link>
        </ul>
      </div>
      <div className="topRight">
        {authenticate ? renderLoggedInLinks() : renderNonLoggedInLinks()}
      </div>
    </div>
  );
};

export default Topbar;
