import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Please select song</div>;
  }
  return (
    <div>
      {song.title} -- {song.duration}
    </div>
  );
};

const mapStateToProps = state => ({ song: state.selectedSong });
export default connect(mapStateToProps)(SongDetail);
