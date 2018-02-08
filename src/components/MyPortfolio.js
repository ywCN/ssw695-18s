// import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    Button,
    Icon,
    Form,
    Input,
    TextArea,
    Divider
} from 'semantic-ui-react';

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
                    <Button
                        animated
                        as={Link}
                        to="/editportfolio"
                        onClick={() => console.log('Edit Portfolio clicked')}
                    >
                        <Button.Content visible>Edit Portfolio</Button.Content>
                        <Button.Content hidden>
                            <Icon name="write" />
                        </Button.Content>
                    </Button>
                </Form>
            );
        } else {
            return <div />;
        }
    }
    renderProjectsHelper() {
        return (
            <Form>
                <Form.Field
                    id="form-input-control-first-name"
                    control={Input}
                    label="Project Name"
                    placeholder="Project Name"
                />
                <Form.Field
                    id="form-textarea-control-opinion"
                    control={TextArea}
                    label="Project Description"
                    placeholder="Project Description"
                />
                <Button
                    animated
                    as={Link}
                    to="/myportfolio"
                    onClick={() => console.log('add clicked')}
                >
                    <Button.Content visible>Edit</Button.Content>
                    <Button.Content hidden>
                        <Icon name="edit" />
                    </Button.Content>
                </Button>
            </Form>
        );
    }

    renderProjects() {
        return (
            <div>
                {this.renderProjectsHelper()}
                <Divider fitted />
                <Button
                    animated
                    as={Link}
                    to="/addproject"
                    onClick={() => console.log('Add Project clicked')}
                >
                    <Button.Content visible>Add Project</Button.Content>
                    <Button.Content hidden>
                        <Icon name="add" />
                    </Button.Content>
                </Button>
            </div>
        );
    }
    render() {
        return (
            <div>
                <Divider horizontal>Portfolio</Divider>
                {this.renderPortfolio()}
                <Divider horizontal>Projects</Divider>
                {this.renderProjects()}
            </div>
        );
    }
}

const mapStateToProps = ({ current_user_portfolio }) => {
    return { current_user_portfolio };
};

export default connect(mapStateToProps, { fetchPortfolio })(MyPortfolio);
