import React from 'react';
import { connect } from 'react-redux';
import FacebookLogin from 'react-facebook-login';

import { login } from '../actions';

class FBLogin extends React.Component {
    responseFacebook = response => {
        console.log('facebook auth response is', response);
        this.props.login(response);
    };

    render() {
        if (!this.props.user) {
            return (
                <FacebookLogin
                    appId="164069247570253"
                    autoLoad={false}
                    fields="name,email,picture"
                    scope="public_profile,user_friends,user_actions.books"
                    callback={this.responseFacebook}
                    size="small"
                />
            );
        } else {
            return <div />;
        }
    }
}

function mapStateToProps({ user }) {
    return { user };
}

export default connect(mapStateToProps, { login })(FBLogin);
