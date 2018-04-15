import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import Cookies from 'universal-cookie';

import { loginSuccess } from '../actions';

class FBLogin extends React.Component {
  responseFacebook = response => {
    const cookies = new Cookies();
    console.log('facebook auth response is', response);
    this.props.loginSuccess(
      response,
      () => this.props.history.push('/dashboard'),
      () => cookies.set('loginStatus', 'ok', { path: '/' })
    );
  };

  render() {
    const fbIcon = (
      <img
        style={{
          width: '40px',
          height: '40px'
        }}
        src="https://upload.wikimedia.org/wikipedia/commons/c/c2/F_icon.svg"
        alt="login fb"
      />
    );
    return (
      <FacebookLogin
        appId="164069247570253"
        fields="name,email"
        icon={fbIcon}
        scope="public_profile,user_friends,user_actions.books"
        callback={this.responseFacebook}
        textButton=""
        cssClass="ui basic button"
      />
    );
  }
}

export default connect(null, { loginSuccess })(withRouter(FBLogin));
