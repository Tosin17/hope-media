import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';

const getPostsUrl = 'https://jsonplaceholder.typicode.com/posts';

export const selectSongAction = song => ({
  type: 'SONG_SELECTED',
  payload: song
});

export const fetchPosts = () => dispatch => {
  ajax
    .get(getPostsUrl)
    .pipe(map(posts => posts.slice(0, 5)))
    .subscribe(posts => dispatch({ type: 'FETCH_POSTS', payload: posts }));
};
