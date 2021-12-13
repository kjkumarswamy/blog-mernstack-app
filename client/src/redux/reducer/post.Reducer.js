import { postConstants } from "../constants";

//create posts
const createPostState = {
  loading: false,
  post: {},
  error: "",
};

export const createPostReducer = (state = createPostState, action) => {
  switch (action.type) {
    case postConstants.CREATE_POST_REQUEST:
      return { ...state, loading: true };
    case postConstants.CREATE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        post: action.payload.post,
      };
    case postConstants.CREATE_POST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

//get posts
const mypostsState = {
  loading: false,
  myposts: [],
  error: "",
};

export const getmyPostsReducer = (state = mypostsState, action) => {
  switch (action.type) {
    case postConstants.GET_MY_POST_REQUEST:
      return { ...state, loading: true };
    case postConstants.GET_MY_POST_SUCCESS:
      return { ...state, loading: false, myposts: action.payload.myposts };
    case postConstants.GET_MY_POST_FAILURE:
      return { ...state, loading: false, error: action.paylod.error };
    default:
      return state;
  }
};

//get all posts
const allPostsState = {
  loading: false,
  posts: [],
  error: "",
};

export const getAllPostsReducer = (state = allPostsState, action) => {
  switch (action.type) {
    case postConstants.GET_ALL_POST_REQUEST:
      return { ...state, loading: true };
    case postConstants.GET_ALL_POST_SUCCESS:
      return { ...state, loading: false, posts: action.payload.posts };
    case postConstants.GET_ALL_POST_FAILURE:
      return { ...state, loading: false, error: action.paylod.error };
    default:
      return state;
  }
};

//update posts
const updatePostState = {
  loading: false,
  message: "",
  error: "",
};

export const updatePostReducer = (state = updatePostState, action) => {
  switch (action.type) {
    case postConstants.UPDATE_POST_REQUEST:
      return { ...state, loading: true };
    case postConstants.UPDATE_POST_SUCCESS:
      return { ...state, loading: false, message: action.payload.message };
    case postConstants.UPDATE_POST_FAILURE:
      return { ...state, loading: false, error: action.paylod.error };
    default:
      return state;
  }
};

//delete posts
const deletePostState = {
  processing: false,
  message: "",
  error: "",
};

export const deletePostReducer = (state = deletePostState, action) => {
  switch (action.type) {
    case postConstants.DELETE_POST_REQUEST:
      return { ...state, processing: true };
    case postConstants.DELETE_POST_SUCCESS:
      return { ...state, processing: false, message: action.payload.message };
    case postConstants.DELETE_POST_FAILURE:
      return { ...state, processing: false, error: action.paylod.error };
    default:
      return state;
  }
};
