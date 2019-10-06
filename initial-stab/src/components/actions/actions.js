import PostsService from '../services/posts-service';

export const selectSongAction = song => ({
  type: 'SONG_SELECTED',
  payload: song
});

export const fetchPosts = () => async (dispatch, getState) => {
  const posts = await PostsService.getPosts();
  dispatch({ type: 'FETCH_POSTS', payload: posts });
};

export const fetchUser = id => async dispatch => {
  const user = await PostsService.getUser(id);
  dispatch({ type: 'FETCH_USER', payload: user });
};

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  const { posts } = getState();
  const uniqUserIds = [...new Set(posts.map(post => post.userId))];
  uniqUserIds.forEach(id => dispatch(fetchUser(id)));
};
