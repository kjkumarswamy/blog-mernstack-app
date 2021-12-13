import React, { useState } from "react";
import "./style.css";
import Layout from "../../components/Layout/Layout";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { registerAction } from "../../redux/action/auth.Action";

const Signup = () => {
  const dispatch = useDispatch();
  const { authenticate, loading, message, error } = useSelector(
    (state) => state.authState
  );

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (authenticate) {
    return <Redirect to="/" />;
  }

  const registerHandle = (e) => {
    e.preventDefault();
    const user = { username, email, password };
    dispatch(registerAction(user));
  };

  return (
    <Layout>
      <div className="signup">
        <span className="signupTitle">Signup</span>

        <form className="signupForm" onSubmit={registerHandle}>
          <label>Username</label>
          <input
            type="text"
            required
            maxLength={12}
            minLength={3}
            className="signupInput"
            placeholder="Enter your Username..."
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <label>Email</label>

          <input
            type="email"
            required
            className="signupInput"
            placeholder="Enter your Email..."
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label>Password</label>
          <input
            type="password"
            required
            minLength={8}
            className="signupInput"
            placeholder="Enter yout Password..."
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button className="signupButton" type="submit">
            Signup
          </button>
          <div>
            {loading ? (
              <p className="message">Loading... please wait...!</p>
            ) : error ? (
              <p className="message">{error}</p>
            ) : message ? (
              <h2 style={{ color: "tomato" }}>{message}</h2>
            ) : null}
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Signup;
