import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { savePortfolio } from '../actions';
import { Button, Icon, Form } from 'semantic-ui-react';

class EditPortfolio extends Component {
    renderPortfolio() {
        if (this.props.current_user_portfolio) {
            const { name, email } = this.props.current_user_portfolio;

            return (
                <Form>
                    <Form.Group unstackable widths={2}>
                        <Form.Input label="First name" defaultValue={name} />
                        <Form.Input label="Last name" placeholder="Last name" />
                    </Form.Group>
                    <Form.Group widths={2}>
                        <Form.Input label="Email" defaultValue={email} />
                        <Form.Input label="Phone" placeholder="Phone" />
                    </Form.Group>
                    <Form.Checkbox label="I agree to the Terms and Conditions" />
                    <Button
                        animated
                        as={Link}
                        to="/myportfolio"
                        onClick={() => this.props.savePortfolio()}
                    >
                        <Button.Content visible>Save</Button.Content>
                        <Button.Content hidden>
                            <Icon name="right arrow" />
                        </Button.Content>
                    </Button>
                </Form>
            );
        } else {
            return <div />;
        }
    }
    render() {
        return <div>{this.renderPortfolio()}</div>;
    }
}

const mapStateToProps = ({ current_user_portfolio }) => {
    return { current_user_portfolio };
};

export default connect(mapStateToProps, { savePortfolio })(EditPortfolio);
