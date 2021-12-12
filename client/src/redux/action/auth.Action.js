import { authConstants } from "../constants";
import axios from "../../helpers/axios";

//register
export const registerAction = (user) => {
  return async (dispatch) => {
    try {
      dispatch({ type: authConstants.REGISTER_REQUEST });
      const res = await axios.post("/user/signup", { ...user });

      if (res.status === 201) {
        dispatch({
          type: authConstants.REGISTER_SUCCESS,
          payload: {
            message: res.data.message,
          },
        });
        window.location.href = "/login";
      } else {
        if (res.status === 400) {
          dispatch({
            type: authConstants.REGISTER_FAILURE,
            payload: {
              error: res.data.error,
            },
          });
        }
      }
    } catch (error) {
      const { data } = error.response;
      dispatch({
        type: authConstants.REGISTER_FAILURE,
        payload: {
          error: data.error,
        },
      });
    }
  };
};

//login
export const loginAction = (user) => {
  return async (dispatch) => {
    try {
      dispatch({ type: authConstants.LOGIN_REQUEST });
      const res = await axios.post("/user/signin", { ...user });
      if (res.status === 200) {
        const { token, user } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        dispatch({
          type: authConstants.LOGIN_SUCCESS,
          payload: { token, user },
        });
        window.location.reload(true);
      }
      if (res.status === 400) {
        dispatch({
          type: authConstants.LOGIN_FAILURE,
          payload: {
            error: res.data.error,
          },
        });
      }
    } catch (error) {
      const { data } = error.response;
      dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload: {
          error: data.error,
        },
      });
    }
  };
};

//logout
export const logoutAction = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: authConstants.LOGOUT_REQUEST });
      const res = await axios.post("/user/signout");
      if (res.status === 200) {
        localStorage.clear();
        dispatch({
          type: authConstants.LOGOUT_SUCCESS,
          payload: {
            message: res.data.message,
          },
        });
      }
      if (res.status === 400) {
        dispatch({
          type: authConstants.LOGOUT_FAILURE,
          payload: {
            error: res.data.error,
          },
        });
      }
    } catch (error) {
      dispatch({
        type: authConstants.LOGOUT_FAILURE,
        payload: {
          error: "",
        },
      });
    }
  };
};

//isUserLoggedin
export const isUserLoggedIn = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });
    } else {
      dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload: {
          error: "",
        },
      });
    }
  };
};
