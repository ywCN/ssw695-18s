import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Card } from 'semantic-ui-react';

import { fetchCoders } from './../actions';

class CoderList extends Component {
    componentWillMount() {
        this.props.fetchCoders();
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
                            <Button
                                as={Link}
                                to="/coderInfo"
                                basic
                                color="green"
                            >
                                View Portfolio
                            </Button>
                            {/* TODO: callback for addContact action */}
                            <Button basic color="blue">
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

function mapStateToProps({ coders }) {
    return { coders };
}

export default connect(mapStateToProps, { fetchCoders })(CoderList);
