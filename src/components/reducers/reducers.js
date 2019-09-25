import { combineReducers } from 'redux';

export const getSongsReducer = () => [
  { title: 'song 1', duration: '2.23' },
  { title: 'song 2', duration: '1.03' },
  { title: 'song 3', duration: '2.00' },
  { title: 'song 4', duration: '5.23' }
];

export const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return selectedSong;
  }
  return selectedSong;
};

export default combineReducers({
  songs: getSongsReducer,
  selectedSong: selectedSongReducer
});
