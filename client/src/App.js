import React, { useEffect } from "react";
import Routes from "./components/Routes/Routes";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn } from "./redux/action/auth.Action";
import { getAllPostsAction } from "./redux/action/post.Action";
import { getUserAction } from "./redux/action/user.Action";

const App = () => {
  const dispatch = useDispatch();
  const { authenticate } = useSelector((state) => state.authState);

  useEffect(() => {
    if (!authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, [dispatch, authenticate]);

  useEffect(() => {
    dispatch(getAllPostsAction());
    if (authenticate) {
      dispatch(getUserAction());
    }
  }, [dispatch, authenticate]);

  return (
    <>
      <Routes />
    </>
  );
};

export default App;
