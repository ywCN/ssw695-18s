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

  renderFollowers = mapping => {
    return this.props.followers.map(relationship => {
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
            {mapping.get(relationship.user_from)}
          </Button>
        );
      } else {
        return null;
      }
    });
  };

  render() {
    const map = new Map();

    for (const { role, name } of this.props.coders) {
      const pk = role;
      map.set(pk, name);
    }

    if (this.state.cookie) {
      return (
        <div>
          <CoderList />
          <h1>My Followings. Click to unfollow. </h1>
          <p style={{ width: '500px' }}>{this.renderFollowers(map)}</p>
        </div>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

const mapStateToProps = ({ user, followers, pkToNameMapping, coders }) => {
  return { user, followers, pkToNameMapping, coders };
};

export default connect(mapStateToProps, { fetchAllFollowers, unfollow })(
  Dashboard
);
