import { combineReducers } from 'redux';
import { getSongsReducer } from './reducers';
import { selectedSongReducer } from './reducers';
import { fetchPostsReducer } from './posts-reducers/posts-reducers';

export default combineReducers({
  songs: getSongsReducer,
  selectedSong: selectedSongReducer,
  posts: fetchPostsReducer
});
