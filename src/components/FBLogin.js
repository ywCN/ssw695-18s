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
    return (
      <FacebookLogin
        appId="164069247570253"
        fields="name,email"
        scope="public_profile,user_friends,user_actions.books"
        callback={this.responseFacebook}
        cssClass="ui blue fluid button"
      />
    );
  }
}

export default connect(null, { loginSuccess })(withRouter(FBLogin));
