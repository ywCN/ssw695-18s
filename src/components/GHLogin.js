import React from 'react';
// import { connect } from 'react-redux';
import GitHubLogin from 'react-github-login';

// import { login } from '../actions';

class GHLogin extends React.Component {
    render() {
        const onSuccess = response => console.log(response);
        const onFailure = response => console.error(response);
        if (!this.props.user) {
            const currentClientId =
                process.env.NODE_ENV === 'development'
                    ? 'f76940e82ae1b9c20108'
                    : 'e4f29a993da09ec310cf';
            console.log('current environment is', process.env.NODE_ENV);
            console.log('current client id is', currentClientId);
            return (
                <GitHubLogin
                    redirectUri=""
                    clientId={currentClientId}
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                />
            );
        } else {
            return <div />;
        }
    }
}
export default GHLogin;

// export default connect(mapStateToProps, { login })(GHLogin);
