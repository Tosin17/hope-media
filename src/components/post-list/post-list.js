import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/actions';
import User from '../user/user';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const posts = this.props.posts.map(post => {
      return (
        <li key={post.id}>
          <h5>{post.title}</h5>
          <div>{post.body}</div>
          <User userId={post.userId} />
          <hr />
        </li>
      );
    });

    return <ul className="post-list">{posts}</ul>;
  }
}

const mapStateToProps = state => ({ posts: state.posts });

// Connect component to store
// Pass state and actions to `PostList`
export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostList);
