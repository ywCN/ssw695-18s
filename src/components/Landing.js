import React from 'react';
import { withRouter } from 'react-router-dom';
import Cookies from 'universal-cookie';

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
        <div style={style}>
          <LoginOptions />
        </div>
      );
    }
  }
}

const style = {
  maxWidth: '90%',
  width: '400px',
  textAlign: 'center',
  margin: 'auto'
};

export default withRouter(Landing);
