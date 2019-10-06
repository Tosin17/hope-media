import React from 'react';
import { connect } from 'react-redux';
import { selectSongAction } from '../actions/actions';
import './song-list.scss';

class SongList extends React.Component {
  render() {
    const list = this.props.songs.map((song, index) => (
      <li key={index}>
        {song.title}
        <button type="button" onClick={() => this.props.selectSong(song)}>
          Select
        </button>
      </li>
    ));
    return <ul className="songs-list">{list}</ul>;
  }
}

// A function that maps state to props
const mapStateToProps = state => ({ songs: state.songs });

// 1. Connect component and actionCreator to store. NOTE! dispatch(actionCreator) is called underthehood
// 2. Pass state and actions to component as props
export default connect(
  mapStateToProps,
  { selectSong: selectSongAction }
)(SongList);
