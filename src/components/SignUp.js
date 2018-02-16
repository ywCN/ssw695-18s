import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';
// TODO: import actions

class SignUp extends Component {
    state = {
        email: '',
        password1: '',
        password2: '',
        submittedEmail: '',
        submittedPassword1: '',
        submittedPassword2: ''
    };

    handleChange = (e, { name, value }) => this.setState({ [name]: value });

    handleSubmit = () => {
        const { email, password1, password2 } = this.state;

        this.setState({
            submittedEmail: email,
            submittedPassword1: password1,
            submittedPassword2: password2
        });
        // TODO: insert login here and pass below as callback
        this.props.history.push('/dashboard');
        console.log({ email, password1, password2 });
    };
    render() {
        const { email, password1, password2 } = this.state;
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
                        <Header as="h2" color="teal" textAlign="center">
                            Sign Up with Email
                        </Header>
                        <Form size="large" onSubmit={this.handleSubmit}>
                            <Segment stacked>
                                <Form.Input
                                    fluid
                                    icon="user"
                                    iconPosition="left"
                                    placeholder="user name"
                                    // name="name"
                                    // value={name}
                                    // onChange={this.handleChange}
                                />
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
                                    name="password1"
                                    value={password1}
                                    onChange={this.handleChange}
                                />
                                <Form.Input
                                    fluid
                                    icon="lock"
                                    iconPosition="left"
                                    placeholder="Repeat Password"
                                    type="password"
                                    name="password2"
                                    value={password2}
                                    onChange={this.handleChange}
                                />

                                <Button color="teal" fluid size="large">
                                    Sign Up
                                </Button>
                            </Segment>
                        </Form>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default withRouter(SignUp);
