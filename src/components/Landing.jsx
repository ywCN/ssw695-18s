import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';
import Typing from 'react-typing-animation';

import LoginOptions from './LoginOptions';

class Landing extends React.Component {
  componentWillMount() {
    const cookies = new Cookies();
    this.setState({ cookie: cookies.get('loginStatus') });
  }

  render() {
    if (this.state.cookie && this.props.user) {
      return <Redirect to="/dashboard" />;
    } else {
      return (
        <div>
          <Typing
            className="segment"
            speed={50}
            startDelay={1000}
            cursor={true}
          >
            <h1
              style={{
                textAlign: 'center',
                marginTop: '60px',
                fontFamily: 'sans-serif',
                color: 'grey'
              }}
            >
              Welcome to CodeIn
            </h1>
          </Typing>
          <LoginOptions />
        </div>
      );
    }
  }
}

const mapStateToProps = ({ user }) => {
  return { user };
};

export default connect(mapStateToProps)(Landing);
