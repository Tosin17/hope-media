import React from 'react';
import { connect } from 'react-redux';

import { signIn, signOut } from '../../actions';
import './Auth.scss';

class Auth extends React.Component {
  componentDidMount() {}

  renderButton() {}

  render() {
    console.log(this.props);
    return (
      <button className="auth__button" type="button">
        Log in
      </button>
    );
  }
}

const mapStateToProps = state => ({
  isSignedIn: state.auth.isSignedIn
});

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(Auth);
