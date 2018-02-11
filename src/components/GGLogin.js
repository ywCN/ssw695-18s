/**
 * Note: 'Block third-party cookies' must be disabled to make this component work
 * chrome://settings/content/cookies
 */
import React from 'react';
import { connect } from 'react-redux';
import { GoogleLogin } from 'react-google-login';

import { login } from '../actions';

class GGLogin extends React.Component {
    responseOnSuccess = response => {
        const { profileObj } = response;
        console.log(profileObj);
        this.props.login(profileObj);
    };
    render() {
        return (
            <GoogleLogin
                clientId="806914580079-9msqlpl8f51fd3diiflsthebog8l7p2u.apps.googleusercontent.com"
                buttonText="LOGIN WITH GOOGLE"
                onSuccess={this.responseOnSuccess}
                // onFailure={responseGoogle}
            />
        );
    }
}

export default connect(null, { login })(GGLogin);
