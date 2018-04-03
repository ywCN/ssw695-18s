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
        <Segment
          padded
          style={{
            maxWidth: '90%',
            width: '400px',
            textAlign: 'center',
            margin: 'auto'
          }}
        >
          <Button as={FBLogin} />
          <Divider horizontal>Or</Divider>
          <Button as={GGLogin} />
          <Divider horizontal>Or</Divider>
          <Button
            // style={{ borderWidth: '15px', borderColor: '#fdef65' }}
            style={{ backgroundColor: '#fdef65' }}
            fluid
            as={Link}
            to="/loginemailpassword"
          >
            Login
          </Button>
          <Divider horizontal>Or</Divider>
          <Button
            // style={{ borderWidth: '15px', borderColor: '#fc8184' }}
            style={{ backgroundColor: '#fc8184' }}
            fluid
            as={Link}
            to="/signup"
          >
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
