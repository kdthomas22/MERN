// function that accepts state and action
// logic is based on action type
// state has to be set to an initial value
// return state changed by action
export default (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      // spread in exisiting posts and also the newly created post which is stored in the payload of this action
      return [...posts, action.payload];
    default:
      return posts;
  }
};
