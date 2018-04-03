import React from 'react';
import { withRouter } from 'react-router-dom';
import Cookies from 'universal-cookie';
import Typing from 'react-typing-animation';

import LoginOptions from './LoginOptions';
import Dashboard from './Dashboard';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    const cookies = new Cookies();
    this.state = {
      cookie: cookies.get('loginStatus')
    };
  }
  render() {
    if (this.state.cookie) {
      this.props.history.push('/dashboard');
      return <Dashboard />;
    } else {
      return (
        <div>
          <Typing
            className="segment"
            speed={50}
            startDelay={1000}
            cursor={true}
          >
            <h1 style={{ textAlign: 'center' }}>Welcome to CodeIn</h1>
          </Typing>
          <LoginOptions />
        </div>
      );
    }
  }
}

export default withRouter(Landing);
