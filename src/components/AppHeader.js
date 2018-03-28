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
    const logoPath = cookies.get('loginStatus') === 'ok' ? '/dashboard' : '/';
    return (
      <Segment clearing color="red">
        <Image
          as={Link}
          floated="left"
          to={logoPath}
          src="https://i.imgur.com/MVHIKpL.png"
          size="small"
        />
        <Header floated="left">
          <SearchBar />
        </Header>
        <Header as={Link} to="/myportfolio" floated="right">
          <Icon name="user" size="large" color="grey" />
        </Header>
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
      </Segment>
    );
  }
}

function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps, { logout })(AppHeader);
