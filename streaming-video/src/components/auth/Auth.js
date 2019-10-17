import React from 'react';
import { connect } from 'react-redux';

import { signIn, signOut } from '../../actions';
import './Auth.scss';
import { client_id } from '../env';

class Auth extends React.Component {
  auth = null;

  componentDidMount() {
    window.gapi.load('auth2', () => {
      window.gapi.auth2
        .init({
          client_id
        })
        .then(_ => {
          this.auth = window.gapi.auth2.getAuthInstance();

          // Cuz `this.auth.isSignedIn.listen` doesn't trigger on page init.
          this.reRenderComponent(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.reRenderComponent);
        });
    });
  }

  onSignIn = () => {
    this.auth.signIn();
  };

  onSignOut = () => {
    this.auth.signOut();
  };

  reRenderComponent = isSignedIn => {
    // Update `state` to re-render component to show appropriate button
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  renderButton() {
    if (this.props.isSignedIn === null) {
      return <div className="auth__button">Loading... </div>;
    }

    const loginButton = (
      <button className="auth__button" type="button" onClick={this.onSignIn}>
        Log in
      </button>
    );

    const logoutButton = (
      <button className="auth__button" type="button" onClick={this.onSignOut}>
        Log out
      </button>
    );

    return this.props.isSignedIn ? logoutButton : loginButton;
  }

  render() {
    return this.renderButton();
  }
}

const mapStateToProps = state => ({
  isSignedIn: state.auth.isSignedIn,
  state
});

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(Auth);
