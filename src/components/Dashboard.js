import React from 'react';
import Cookies from 'universal-cookie';

import CoderList from './CoderList';
import Landing from './Landing';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    const cookies = new Cookies();
    this.state = {
      cookie: cookies.get('loginStatus')
    };
  }
  render() {
    if (this.state.cookie) {
      return <CoderList />;
    } else {
      return <Landing />;
    }
  }
}

export default Dashboard;
