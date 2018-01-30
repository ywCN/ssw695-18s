import React from 'react';
import { connect } from 'react-redux';
import FacebookLogin from 'react-facebook-login';

import { login } from '../actions';

class MyComponent extends React.Component {
    responseFacebook(response) {
        console.log(response);
    }

    render() {
        return (
            <FacebookLogin
                appId="164069247570253"
                autoLoad={false}
                fields="name,email,picture"
                scope="public_profile,user_friends,user_actions.books"
                // callback={this.responseFacebook}
                callback={this.props.login(response)}
                size="small"
            />
        );
    }
}

export default connect(null, { login })(MyComponent);
