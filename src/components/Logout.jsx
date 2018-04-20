import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';
import Typing from 'react-typing-animation';

import LoginOptions from './LoginOptions';

class Logout extends Component {
  componentWillMount() {
    const cookies = new Cookies();
    this.setState({ cookie: cookies.get('loginStatus') });
  }

  render() {
    if (this.state.cookie) {
      return <Redirect to="/dashboard" />;
    } else {
      return (
        <div>
          <Typing
            className="segment"
            speed={50}
            startDelay={1000}
            cursor={true}
          >
            <h1
              style={{
                textAlign: 'center',
                marginTop: '60px',
                fontFamily: 'sans-serif',
                color: 'grey'
              }}
            >
              Thank you for using CodeIn!
            </h1>
          </Typing>
          <LoginOptions />
        </div>
      );
    }
  }
}

export default Logout;
