import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/actions';

class User extends React.Component {
  componentDidMount() {
    const { fetchUser, userId } = this.props;
    fetchUser(userId);
  }
  render() {
    const { user } = this.props;
    if (!user) {
      return null;
    }
    return <div>{user.name}</div>;
  }
}

const mapStateToProps = (state, componentProps) => ({
  user: state.users.find(user => user.id === componentProps.userId)
});

export default connect(
  mapStateToProps,
  { fetchUser }
)(User);
