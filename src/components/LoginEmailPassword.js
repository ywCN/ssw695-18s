import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';
// TODO: import actions

class LoginEmailPassword extends Component {
    state = { name: '', email: '', submittedName: '', submittedEmail: '' };

    handleChange = (e, { name, value }) => this.setState({ [name]: value });

    handleSubmit = () => {
        const { name, email } = this.state;

        this.setState({ submittedName: name, submittedEmail: email });
        // this.props.history.push('/dashboard');
        console.log({ name, email });
    };
    render() {
        const { name, email } = this.state;
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
                            Log-in to your account
                        </Header>
                        <Form size="large" onSubmit={this.handleSubmit}>
                            <Segment stacked>
                                <Form.Input
                                    fluid
                                    icon="mail"
                                    iconPosition="left"
                                    placeholder="E-mail address"
                                    name="name"
                                    value={name}
                                    onChange={this.handleChange}
                                />
                                <Form.Input
                                    fluid
                                    icon="lock"
                                    iconPosition="left"
                                    placeholder="Password"
                                    // type="password"
                                    name="email"
                                    value={email}
                                    onChange={this.handleChange}
                                />

                                <Button color="teal" fluid size="large">
                                    Login
                                </Button>
                            </Segment>
                        </Form>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default withRouter(LoginEmailPassword);
