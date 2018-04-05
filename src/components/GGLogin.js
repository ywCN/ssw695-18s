/**
 * Note: 'Block third-party cookies' must be disabled to make this component work
 * chrome://settings/content/cookies
 */
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import Cookies from 'universal-cookie';

import { loginSuccess } from '../actions';

class GGLogin extends React.Component {
  responseOnSuccess = response => {
    const cookies = new Cookies();
    const { profileObj } = response;
    console.log('google auth response is', profileObj);
    this.props.loginSuccess(
      profileObj,
      () => this.props.history.push('/dashboard'),
      () => cookies.set('loginStatus', 'ok', { path: '/' })
    );
  };
  responseOnFailure = response => {
    console.error(response);
  };
  render() {
    return (
      <GoogleLogin
        clientId="806914580079-9msqlpl8f51fd3diiflsthebog8l7p2u.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={this.responseOnSuccess}
        onFailure={this.responseOnFailure}
        className="ui red basic fluid button"
      />
    );
  }
}

export default connect(null, { loginSuccess })(withRouter(GGLogin));
