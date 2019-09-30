import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostList extends Component {
  render() {
    return <div>Post List</div>;
  }
}

const mapStateToProps = state => ({});
// Connect component to store
export default connect(mapStateToProps)(PostList);
