import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Cookies from 'universal-cookie';
import { Segment, Button, Divider } from 'semantic-ui-react';

import FBLogin from './FBLogin';
import GGLogin from './GGLogin';

class LoginOptions extends Component {
  constructor(props) {
    super(props);
    const cookies = new Cookies();
    this.state = {
      cookie: cookies.get('loginStatus')
    };
  }
  render() {
    if (this.state.cookie) {
      return <div />;
    } else {
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
    }
  }
}

const mapStateToProps = ({ user }) => {
  return { user };
};

export default connect(mapStateToProps)(LoginOptions);
