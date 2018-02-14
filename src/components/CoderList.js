import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Button,
    Header,
    Icon,
    Modal,
    Card,
    Form,
    Divider
} from 'semantic-ui-react';

import {
    fetchCoders,
    setCurrentCoderPortfolio,
    addContact
} from './../actions';

class CoderList extends Component {
    componentWillMount() {
        this.props.fetchCoders();
    }
    renderPortfolio = coder => {
        const { name, email } = coder;
        return (
            <Form>
                <Form.Group unstackable widths={2}>
                    <Form.Input
                        label="First name"
                        defaultValue={name}
                        readOnly
                    />
                    <Form.Input
                        label="Last name"
                        defaultValue="Last name"
                        readOnly
                    />
                </Form.Group>
                <Form.Group widths={2}>
                    <Form.Input label="Email" defaultValue={email} readOnly />
                    <Form.Input label="Phone" defaultValue="Phone" readOnly />
                </Form.Group>
            </Form>
        );
    };
    renderProjectsHelper = coder => {
        const { projects } = coder;
        return projects.map(project => {
            const { projectName, projectDescription } = project;
            return (
                // TODO: use id for key
                <Form key={projectName}>
                    <Form.Input
                        label="Project Name"
                        defaultValue={projectName}
                        readOnly
                    />
                    <Form.TextArea
                        label="Project Description"
                        defaultValue={projectDescription}
                        readOnly
                    />
                    <Divider section />
                </Form>
            );
        });
    };

    renderProjects = coder => {
        return <div>{this.renderProjectsHelper(coder)}</div>;
    };

    renderScrollContent = coder => {
        return (
            <div>
                <Divider horizontal>Portfolio</Divider>
                {this.renderPortfolio(coder)}
                <Divider horizontal>Projects</Divider>
                {this.renderProjects(coder)}
            </div>
        );
    };

    renderModal(coder) {
        return (
            <Modal
                trigger={
                    <Button
                        basic
                        color="green"
                        onClick={() =>
                            this.props.setCurrentCoderPortfolio(coder)
                        }
                    >
                        View Portfolio
                    </Button>
                }
            >
                <Modal.Header>Profile Picture</Modal.Header>
                <Modal.Content scrolling>
                    <Modal.Description>
                        <Header>Modal Header</Header>
                        <p>
                            This is an example of expanded content that will
                            cause the modal's dimmer to scroll
                        </p>

                        <div>{this.renderScrollContent(coder)}</div>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button secondary>
                        Exit <Icon name="left chevron" />
                    </Button>
                    <Button primary>
                        Add Contact <Icon name="right chevron" />
                    </Button>
                </Modal.Actions>
            </Modal>
        );
    }

    renderCard() {
        return this.props.coders.map(coder => {
            // TODO: use id instead of name
            const { name, role, exp } = coder;
            return (
                <Card key={name}>
                    <Card.Content>
                        <Card.Header>{name}</Card.Header>
                        <Card.Meta>{role}</Card.Meta>
                        <Card.Description>{exp}</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className="ui two buttons">
                            {this.renderModal(coder)}

                            <Button
                                basic
                                color="blue"
                                onClick={() => this.props.addContact(coder)}
                            >
                                Add to Contact
                            </Button>
                        </div>
                    </Card.Content>
                </Card>
            );
        });
    }
    renderCards() {
        if (this.props.coders) {
            return <Card.Group>{this.renderCard()}</Card.Group>;
        } else {
            return <div />;
        }
    }
    render() {
        return <div>{this.renderCards()}</div>;
    }
}

const mapStateToProps = ({ coders }) => {
    return { coders };
};

export default connect(mapStateToProps, {
    fetchCoders,
    setCurrentCoderPortfolio,
    addContact
})(CoderList);
