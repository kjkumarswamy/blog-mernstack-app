import { combineReducers } from "redux";
import { authReducer } from "../reducer/auth.Reducer";
import {
  createPostReducer,
  getmyPostsReducer,
  getAllPostsReducer,
  updatePostReducer,
  deletePostReducer,
} from "../reducer/post.Reducer";
import { userReducer, updateUserReducer } from "../reducer/user.Reducer";

const rootReducer = combineReducers({
  authState: authReducer,
  createPost: createPostReducer,
  myPost: getmyPostsReducer,
  allPost: getAllPostsReducer,
  updatePost: updatePostReducer,
  deletePost: deletePostReducer,
  getUser: userReducer,
  updateUser: updateUserReducer,
});

export default rootReducer;
