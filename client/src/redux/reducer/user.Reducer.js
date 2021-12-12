import { userConstants } from "../constants";

//update user
const updateUserState = {
  loading: false,
  message: "",
  error: null,
};

export const updateUserReducer = (state = updateUserState, action) => {
  switch (action.type) {
    case userConstants.UPDATE_USER_REQUEST:
      return { ...state, loading: true };
    case userConstants.UPDATE_USER_SUCCESS:
      return { ...state, loading: false, message: action.payload.message };
    case userConstants.UPDATE_USER_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
};

//get user
const userState = {
  loading: false,
  user: {},
  error: null,
};

export const userReducer = (state = userState, action) => {
  switch (action.type) {
    case userConstants.GET_USER_REQUEST:
      return { ...state, loading: true };
    case userConstants.GET_USER_SUCCESS:
      return { ...state, loading: false, user: action.payload.user };
    case userConstants.GET_USER_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
};

//delete user
const deleteUserState = {
  loading: false,
  message: "",
  error: null,
};

export const deleteUserReducer = (state = deleteUserState, action) => {
  switch (action.type) {
    case userConstants.DELETE_USER_REQUEST:
      return { ...state, loading: true };
    case userConstants.DELETE_USER_SUCCESS:
      return { ...state, loading: false, message: action.payload.message };
    case userConstants.DELETE_USER_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
};
