/**
 * Note: 'Block third-party cookies' must be disabled to make this component work
 * chrome://settings/content/cookies
 */
import React from 'react';
import { GoogleLogin } from 'react-google-login';

const responseGoogle = response => {
    console.log(response);
};

class GGLogin extends React.Component {
    render() {
        return (
            <GoogleLogin
                clientId="806914580079-9msqlpl8f51fd3diiflsthebog8l7p2u.apps.googleusercontent.com"
                buttonText="LOGIN WITH GOOGLE"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
            />
        );
    }
}

export default GGLogin;
