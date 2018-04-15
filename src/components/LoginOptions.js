import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Cookies from 'universal-cookie';
import { Segment, Button, Divider, Container } from 'semantic-ui-react';

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
            margin: 'auto',
            border: 'none',
            boxShadow: 'none'
          }}
        >
          <LoginEmailPassword />
          <Container style={{ marginTop: '30px', marginBottom: '30px' }}>
            <Divider clearing />
            <GGLogin /> <FBLogin />
          </Container>
          <Divider clearing />
          <Link
            to="/signup"
            style={{
              fontFamily: 'sans-serif',
              color: 'grey'
            }}
          >
            <h1>New to CodeIn?</h1>
          </Link>
        </Segment>
      );
    }
  }
}

const mapStateToProps = ({ user }) => {
  return { user };
};

export default connect(mapStateToProps)(LoginOptions);
