import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Cookies from 'universal-cookie';
import { Segment, Button, Divider } from 'semantic-ui-react';

import FBLogin from './FBLogin';
import GGLogin from './GGLogin';
import LoginEmailPassword from './LoginEmailPassword';

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
        <Segment
          padded
          style={{
            maxWidth: '90%',
            width: '400px',
            textAlign: 'center',
            margin: 'auto'
          }}
        >
          <LoginEmailPassword />
          <Button as={FBLogin} />
          <Divider horizontal>Or</Divider>
          <Button as={GGLogin} />
          <Divider horizontal>Or</Divider>
          <Button basic color="yellow" fluid as={Link} to="/loginemailpassword">
            Login
          </Button>
          <Divider horizontal>Or</Divider>
          <Button basic color="red" fluid as={Link} to="/signup">
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
