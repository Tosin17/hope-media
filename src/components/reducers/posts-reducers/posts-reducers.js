export const fetchPostsReducer = (posts = null, action) => {
  if (action.type === 'FETCH_POSTS') {
    return action.payload;
  }
  return posts;
};
