import React from 'react';
import { connect } from 'react-redux';
import './song-list.scss';

class SongList extends React.Component {
  render() {
    console.log(this.props);
    return <div className="songs-list">Songs</div>;
  }
}

const mapStateToProps = state => ({
  songs: state.songs
});

export default connect(mapStateToProps)(SongList);
