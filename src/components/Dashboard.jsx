import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';

import { fetchAllFollowers } from './../actions/index';
import CoderList from './CoderList';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    const cookies = new Cookies();
    this.state = {
      cookie: cookies.get('loginStatus')
    };
    this.props.fetchAllFollowers(this.state.cookie);
  }

  render() {
    const updatedFollowers = JSON.stringify(this.props.followers, null, 2);
    if (this.state.cookie && this.props.user) {
      return (
        <div>
          <CoderList />
          <h3>My PK is: {this.props.user.user.pk}</h3>
          <p style={{ width: '200px' }}>{updatedFollowers}</p>
        </div>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

const mapStateToProps = ({ user, followers }) => {
  return { user, followers };
};

export default connect(mapStateToProps, { fetchAllFollowers })(Dashboard);
