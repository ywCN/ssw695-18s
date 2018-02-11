import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Segment, Button, Divider } from 'semantic-ui-react';

import { login } from '../actions';
import FBLogin from './FBLogin';
import GGLogin from './GGLogin';

class Login extends Component {
    render() {
        if (!this.props.user) {
            return (
                <Segment padded>
                    <Button as={FBLogin} color="blue" fluid />
                    <Divider horizontal>Or</Divider>
                    <Button as={GGLogin} color="red" fluid />
                    <Divider horizontal>Or</Divider>
                    <Button color="black" fluid>
                        Sign Up Now
                    </Button>
                </Segment>
            );
        } else {
            return <div />;
        }
    }
}
function mapStateToProps({ user }) {
    return { user };
}

export default connect(mapStateToProps, { login })(Login);
