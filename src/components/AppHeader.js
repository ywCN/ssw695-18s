import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Header, Segment, Icon, Image } from 'semantic-ui-react';
import Cookies from 'universal-cookie';

import { logout } from '../actions';
import SearchBar from './SearchBar';

class AppHeader extends React.Component {
  componentWillMount() {
    const cookies = new Cookies();
    this.setState({ cookie: cookies.get('loginStatus') });
  }

  render() {
    const cookies = new Cookies();
    const logoPath = this.state.cookie || this.props.user ? '/dashboard' : '/';
    const Icons =
      this.state.cookie || this.props.user ? (
        <div>
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
          <Header as={Link} to="/myportfolio" floated="right">
            <Icon name="user" size="large" color="grey" />
          </Header>
        </div>
      ) : null;

    const bigPic =
      this.state.cookie || this.props.user ? null : (
        <Image src="https://i.imgur.com/ugZbSuU.png" />
      );

    return (
      <Segment
        clearing
        style={{
          borderTopColor: '#fc8184',
          boxShadow: 'none'
          // borderBottom: 'none',
          // borderLeft: 'none',
          // borderRight: 'none'
        }}
      >
        <Image
          as={Link}
          floated="left"
          to={logoPath}
          src="https://i.imgur.com/WSUHc40.png"
          size="small"
        />
        {Icons}
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
