import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Segment, Button, Divider } from 'semantic-ui-react';

import FBLogin from './FBLogin';
import GGLogin from './GGLogin';

class LoginOptions extends Component {
    render() {
        if (!this.props.user) {
            return (
                <Segment padded>
                    <Button as={FBLogin} color="blue" fluid />
                    <Divider horizontal>Or</Divider>
                    <Button as={GGLogin} color="red" fluid />
                    <Divider horizontal>Or</Divider>
                    <Button color="black" fluid>
                        Login
                    </Button>
                    <Divider horizontal>Or</Divider>
                    <Button color="blue" fluid>
                        Sign Up
                    </Button>
                </Segment>
            );
        } else {
            return <div />;
        }
    }
}

const mapStateToProps = ({ user }) => {
    return { user };
};

export default connect(mapStateToProps)(LoginOptions);
