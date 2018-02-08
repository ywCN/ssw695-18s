// import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react';

import { fetchPortfolio } from '../actions';

class MyPortfolio extends Component {
    componentWillMount() {
        this.props.fetchPortfolio();
    }

    renderPortfolio() {
        if (this.props.current_user_portfolio) {
            const { name, email } = this.props.current_user_portfolio;

            return (
                <Form>
                    <Form.Group unstackable widths={2}>
                        <Form.Input
                            label="First name"
                            placeholder={name}
                            readOnly
                        />
                        <Form.Input
                            label="Last name"
                            placeholder="Last name"
                            readOnly
                        />
                    </Form.Group>
                    <Form.Group widths={2}>
                        <Form.Input
                            label="Email"
                            placeholder={email}
                            readOnly
                        />
                        <Form.Input
                            label="Phone"
                            placeholder="Phone"
                            readOnly
                        />
                    </Form.Group>
                </Form>
            );
        } else {
            return <div />;
        }
    }
    render() {
        return (
            <div>
                {this.renderPortfolio()}
                <div>
                    <Button
                        primary
                        as={Link}
                        to="/editportfolio"
                        onClick={() => console.log('Edit Portfolio clicked')}
                    >
                        Edit Portfolio
                    </Button>
                    <Button
                        secondary
                        as={Link}
                        to="/addproject"
                        onClick={() => console.log('Add Project clicked')}
                    >
                        Add Project
                    </Button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ current_user_portfolio }) => {
    return { current_user_portfolio };
};

export default connect(mapStateToProps, { fetchPortfolio })(MyPortfolio);
