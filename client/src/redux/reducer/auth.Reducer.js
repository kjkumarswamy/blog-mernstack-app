import { authConstants } from "../constants";

const authInitialState = {
  token: null,
  user: {
    username: "",
    email: "",
  },
  authenticate: false,
  authenticating: false,
  loading: false,
  error: "",
  message: "",
};

//register, login, logout reducer

export const authReducer = (state = authInitialState, action) => {
  switch (action.type) {
    case authConstants.REGISTER_REQUEST:
      return { ...state, loading: false, error: "" };
    case authConstants.REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload.message,
        error: "",
      };
    case authConstants.REGISTER_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    case authConstants.LOGIN_REQUEST:
      return { ...state, authenticating: true, error: "" };
    case authConstants.LOGIN_SUCCESS:
      return {
        ...state,
        authenticating: false,
        authenticate: true,
        token: action.payload.token,
        user: action.payload.user,
        error: "",
      };
    case authConstants.LOGIN_FAILURE:
      return { ...state, authenticating: false, error: action.payload.error };
    case authConstants.LOGOUT_REQUEST:
      return { ...state, loading: true };
    case authConstants.LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        authenticate: false,
        message: action.payload.message,
      };
    case authConstants.LOGOUT_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
};
