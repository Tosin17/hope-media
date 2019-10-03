import PostsService from '../services/posts-service';

export const selectSongAction = song => ({
  type: 'SONG_SELECTED',
  payload: song
});

export const fetchPosts = () => dispatch => {
  PostsService.getPosts().subscribe(posts =>
    dispatch({ type: 'FETCH_POSTS', payload: posts })
  );
};

export const fetchUser = id => dispatch => {
  PostsService.getUser(id).subscribe(user =>
    dispatch({ type: 'FETCH_USER', payload: user })
  );
};
