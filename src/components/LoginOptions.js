import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Segment, Button, Divider } from 'semantic-ui-react';

import FBLogin from './FBLogin';
import GGLogin from './GGLogin';

class LoginOptions extends Component {
  render() {
    if (!this.props.user) {
      return (
        <Segment padded>
          <Button as={FBLogin} />
          <Divider horizontal>Or</Divider>
          <Button as={GGLogin} />
          <Divider horizontal>Or</Divider>
          {/* TODO: add callback for login */}
          <Button color="black" fluid as={Link} to="/loginemailpassword">
            Login
          </Button>
          <Divider horizontal>Or</Divider>
          {/* TODO: add callback for sign up */}
          <Button color="teal" fluid as={Link} to="/signup">
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
