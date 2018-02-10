import React from 'react';
// import { connect } from 'react-redux';
import GitHubLogin from 'react-github-login';

// import { login } from '../actions';

class GHLogin extends React.Component {
    render() {
        const onSuccess = response => console.log(response);
        const onFailure = response => console.error(response);
        if (!this.props.user) {
            return (
                <GitHubLogin
                    clientId="e4f29a993da09ec310cf"
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
