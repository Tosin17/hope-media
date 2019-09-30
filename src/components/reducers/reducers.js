export const getSongsReducer = () => [
  { title: 'song 1', duration: '2.23' },
  { title: 'song 2', duration: '1.03' },
  { title: 'song 3', duration: '2.00' },
  { title: 'song 4', duration: '5.23' },
  { title: 'song 5', duration: '3.03' }
];

export const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};
