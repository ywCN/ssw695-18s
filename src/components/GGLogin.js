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
        buttonText=""
        onSuccess={this.responseOnSuccess}
        onFailure={this.responseOnFailure}
        className="ui basic button"
      >
        <img
          style={{
            width: '40px',
            height: '40px'
          }}
          src="https://upload.wikimedia.org/wikipedia/commons/9/9f/Google_plus_icon.svg"
          alt="google fb"
        />
      </GoogleLogin>
    );
  }
}

export default connect(null, { loginSuccess })(withRouter(GGLogin));
