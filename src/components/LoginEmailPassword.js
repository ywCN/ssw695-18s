import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Cookies from 'universal-cookie';
import { Button, Form, Grid } from 'semantic-ui-react';

import { login } from '../actions';

class LoginEmailPassword extends Component {
  state = {
    email: '',
    password: ''
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = () => {
    const { email, password } = this.state;
    const cookies = new Cookies();

    const setCookie = token => {
      cookies.set('loginStatus', `JWT ${token}`, { path: '/', maxAge: 3600 });
    };

    this.props.login(
      email,
      password,
      () => this.props.history.push('/dashboard'),
      setCookie
    );
  };
  render() {
    const { email, password } = this.state;
    return (
      <div className="login-form">
        {/*
              Heads up! The styles below are necessary for the correct render of this example.
              You can do same with CSS, the main idea is that all the elements up to the `Grid`
              below must have a height of 100%.
            */}
        <style>{`
              body > div,
              body > div > div,
              body > div > div > div.login-form {
                height: 100%;
              }
            `}</style>
        <Grid
          textAlign="center"
          style={{ height: '100%' }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Form size="large" onSubmit={this.handleSubmit}>
              <Form.Input
                fluid
                icon="mail"
                iconPosition="left"
                placeholder="E-mail address"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
              <Button basic color="yellow" fluid>
                Sign in
              </Button>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default connect(null, { login })(withRouter(LoginEmailPassword));
