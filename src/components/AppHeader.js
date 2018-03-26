import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Header, Segment, Icon, Image } from 'semantic-ui-react';
import { logout } from '../actions';

class AppHeader extends React.Component {
  render() {
    const logoPath = this.props.user ? '/dashboard' : '/';
    return (
      <Segment clearing color="blue">
        <Image
          as={Link}
          floated="left"
          to={logoPath}
          onClick={() => console.log('logo clicked while logged in')}
          src="https://i.imgur.com/MVHIKpL.png"
          size="small"
        />

        <Header as={Link} to="/myportfolio" floated="right">
          <Icon name="user" size="large" />
        </Header>
        <Header
          as={Link}
          to="/logout"
          floated="right"
          onClick={() => {
            this.props.logout();
            console.log('logout clicked');
          }}
        >
          <Icon name="log out" size="large" />
        </Header>
      </Segment>
    );
  }
}

function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps, { logout })(AppHeader);
