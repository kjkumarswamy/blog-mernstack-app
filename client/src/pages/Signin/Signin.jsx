import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../redux/action/auth.Action";
import { Redirect } from "react-router";

const Signin = () => {
  const dispatch = useDispatch();
  const { authenticating, authenticate, error } = useSelector(
    (state) => state.authState
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = (e) => {
    e.preventDefault();
    const user = { email, password };
    dispatch(loginAction(user));
  };

  if (authenticate) {
    return <Redirect to="/" />;
  }
  return (
    <Layout>
      <div className="signin">
        <span className="signinTitle">Signin</span>
        <form className="signinForm" onSubmit={loginHandler}>
          <label>Email</label>
          <input
            type="email"
            className="signinInput"
            required
            placeholder="Enter your Email..."
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label>Password</label>
          <input
            type="password"
            required
            className="signinInput"
            placeholder="Enter yout Password..."
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button type="submit" className="loginButton">
            Signin
          </button>
          <div>
            {authenticating ? (
              <p className="message">Loading... please wait...!</p>
            ) : error ? (
              <p className="message">{error}</p>
            ) : null}
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Signin;
