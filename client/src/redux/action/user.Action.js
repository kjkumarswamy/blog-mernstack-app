import axios from "../../helpers/axios";
import { userConstants } from "../constants";
import { logoutAction } from "../action/auth.Action";

//update user
export const updateUserAction = (form) => {
  return async (dispatch) => {
    try {
      dispatch({ type: userConstants.UPDATE_USER_REQUEST });
      const res = await axios.put("/user/update", form);
      if (res.status === 200) {
        dispatch({
          type: userConstants.UPDATE_USER_SUCCESS,
          payload: {
            message: res.data.message,
          },
        });
        dispatch(getUserAction());
        window.location.href = "/";
      } else {
        dispatch({
          type: userConstants.UPDATE_USER_FAILURE,
          paylod: {
            error: res.data.error,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

//get User
export const getUserAction = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: userConstants.GET_USER_REQUEST });
      const res = await axios.get("/user/getuser");
      if (res.status === 200) {
        dispatch({
          type: userConstants.GET_USER_SUCCESS,
          payload: {
            user: res.data.user,
          },
        });
      } else {
        dispatch({
          type: userConstants.GET_USER_FAILURE,
          payload: {
            error: res.data.error,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

//delete user
export const deleteUserAction = () => {
  return async (dispatch) => {
    dispatch({ type: userConstants.DELETE_USER_REQUEST });
    try {
      const res = await axios.delete("/user/delete");
      if (res.status === 200) {
        dispatch(logoutAction());
        dispatch({
          type: userConstants.DELETE_USER_SUCCESS,
          payload: {
            message: res.data.message,
          },
        });
      } else {
        dispatch({
          type: userConstants.DELETE_USER_FAILURE,
          payload: {
            error: res.data.error,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
