import * as api from "../api";

// Action creators:  functions that return actions

// actions must have a type prop and payload(data)
// since this is an async function, use redux thunk syntax to make it awaitable
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.getPosts();
    // dispatch to fetch action
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (err) {
    console.log(err.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    // dispatch to create action
    dispatch({ type: "CREATE", payload: data });
  } catch (err) {
    console.log(err);
  }
};
