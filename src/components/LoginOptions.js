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
            margin: 'auto'
          }}
        >
          <LoginEmailPassword />
          <Container style={{ marginTop: '30px', marginBottom: '30px' }}>
            <Button as={FBLogin} />
            <Divider horizontal>Or</Divider>
            <Button as={GGLogin} />
          </Container>
          <Divider clearing />
          <Link to="/signup" style={{ color: 'black', fontSize: '30px' }}>
            New to CodeIn?
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
