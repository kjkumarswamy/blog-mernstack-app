import { postConstants } from "../constants";
import axios from "../../helpers/axios";
import history from "../history";

//create posts
export const createPostAction = (form) => {
  return async (dispatch) => {
    dispatch({ type: postConstants.CREATE_POST_REQUEST });
    try {
      const res = await axios.post("/post/create", form);

      if (res.status === 201) {
        dispatch({
          type: postConstants.CREATE_POST_SUCCESS,
          payload: {
            post: res.data.post,
          },
        });
        dispatch(getAllPostsAction());
        const { post } = res.data;
        history.push(`/single/${post.userId}`);
      } else {
        if (res.status === 400) {
          dispatch({
            type: postConstants.CREATE_POST_FAILURE,
            payload: {
              error: res.data.error,
            },
          });
        }
      }
    } catch (error) {
      dispatch({
        type: postConstants.CREATE_POST_FAILURE,
        payload: {
          error: "Something went wrong",
        },
      });
    }
  };
};

//get My posts
export const getMyPostsAction = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: postConstants.GET_MY_POST_REQUEST });
      const res = await axios.get(`/post/mypost/${id}`);
      if (res.status === 200) {
        dispatch({
          type: postConstants.GET_MY_POST_SUCCESS,
          payload: {
            myposts: res.data.post,
          },
        });
      } else {
        dispatch({
          type: postConstants.GET_MY_POST_FAILURE,
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

//get all posts
export const getAllPostsAction = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: postConstants.GET_ALL_POST_REQUEST });
      const res = await axios.get("/post/allpost");
      if (res.status === 200) {
        dispatch({
          type: postConstants.GET_ALL_POST_SUCCESS,
          payload: {
            posts: res.data.posts,
          },
        });
      } else {
        dispatch({
          type: postConstants.GET_ALL_POST_FAILURE,
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

//update posts
export const updatePostAction = (post) => {
  return async (dispatch) => {
    try {
      dispatch({ type: postConstants.UPDATE_POST_REQUEST });
      const res = await axios.put("/post/update", { post });
      if (res.status === 200) {
        dispatch({
          type: postConstants.UPDATE_POST_SUCCESS,
          payload: {
            message: res.data.message,
          },
        });
        window.location.reload(true);
      } else {
        dispatch({
          type: postConstants.UPDATE_POST_FAILURE,
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

//delete posts
export const deletePostAction = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: postConstants.DELETE_POST_REQUEST });
      const res = await axios.delete(`/post/delete/${id}`);
      if (res.status === 200) {
        dispatch({
          type: postConstants.DELETE_POST_SUCCESS,
          payload: {
            message: res.data.message,
          },
        });
        dispatch(getAllPostsAction());
        window.location.replace("/");
      } else {
        dispatch({
          type: postConstants.DELETE_POST_FAILURE,
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
