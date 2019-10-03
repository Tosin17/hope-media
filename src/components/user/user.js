import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/actions';

class User extends React.Component {
  componentDidMount() {
    const { fetchUser, userId } = this.props;
    fetchUser(userId);
  }
  render() {
    const name = this.props.user ? this.props.user.name : 'no name';
    return <div>{name}</div>;
  }
}

const mapStateToProps = state => ({ user: state.user });

export default connect(
  mapStateToProps,
  { fetchUser }
)(User);
