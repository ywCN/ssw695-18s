import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Header, Segment, Icon, Image } from 'semantic-ui-react';
import Cookies from 'universal-cookie';

import { logout } from '../actions';
import SearchBar from './SearchBar';

class AppHeader extends React.Component {
  render() {
    const cookies = new Cookies();
    const logoPath =
      this.props.user || cookies.get('loginStatus') ? '/dashboard' : '/';
    const logoutIcon =
      this.props.user || cookies.get('loginStatus') ? (
        <Header
          as={Link}
          to="/logout"
          floated="right"
          onClick={() => {
            this.props.logout(() => cookies.remove('loginStatus'));
          }}
        >
          <Icon name="log out" size="large" color="grey" />
        </Header>
      ) : null;

    const bigPic =
      this.props.user || cookies.get('loginStatus') ? null : (
        <Image src="https://i.imgur.com/ugZbSuU.png" />
      );
    return (
      <Segment clearing style={{ borderTopColor: '#fc8184' }}>
        <Image
          as={Link}
          floated="left"
          to={logoPath}
          src="https://i.imgur.com/WSUHc40.png"
          size="small"
        />
        {logoutIcon}
        <Header as={Link} to="/myportfolio" floated="right">
          <Icon name="user" size="large" color="grey" />
        </Header>
        <Header floated="right">
          <SearchBar />
        </Header>
        {bigPic}
      </Segment>
    );
  }
}

function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps, { logout })(AppHeader);
