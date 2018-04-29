import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import Cookies from 'universal-cookie';

import { fetchAllFollowers, unfollow } from './../actions/index';
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
    const updatedFollowers = this.props.followers.map(relationship => {
      if (relationship.user_from === this.props.user.user.pk) {
        return (
          <Button
            style={{ marginBottom: '5px' }}
            key={JSON.stringify(relationship)}
            onClick={() =>
              this.props.unfollow(
                relationship.user_from,
                relationship.user_to,
                this.state.cookie
              )
            }
          >
            {JSON.stringify(relationship)}
          </Button>
        );
      } else {
        return null;
      }
    });

    if (this.state.cookie && this.props.user) {
      return (
        <div>
          <CoderList />
          <h1>My Followings. Click to unfollow. </h1>
          <p style={{ width: '500px' }}>{updatedFollowers}</p>
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

export default connect(mapStateToProps, { fetchAllFollowers, unfollow })(
  Dashboard
);
