import React from 'react';
import { connect } from 'react-redux';
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
    if (this.state.cookie && this.props.user) {
      return <CoderList />;
    } else {
      return <Landing />;
    }
  }
}

const mapStateToProps = ({ user }) => {
  return { user };
};

export default connect(mapStateToProps)(Dashboard);
