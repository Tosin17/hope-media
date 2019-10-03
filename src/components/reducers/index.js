import { combineReducers } from 'redux';
import { getSongsReducer } from './reducers';
import { selectedSongReducer } from './reducers';
import { fetchPostsReducer } from './posts-reducers/posts-reducers';
import { userReducer } from '../reducers/user-reducer/user-reducer';

export default combineReducers({
  songs: getSongsReducer,
  selectedSong: selectedSongReducer,
  posts: fetchPostsReducer,
  users: userReducer
});
