import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card } from 'semantic-ui-react';

import { fetchCoders } from './../actions';

class CoderList extends Component {
    componentWillMount() {
        this.props.fetchCoders();
    }

    renderCard() {
        console.log(this.props.coders);
        console.log(this.props.coders);
        console.log(this.props.coders);

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
                            {/* TODO: as={Link} */}
                            <Button basic color="green">
                                Portfolio
                            </Button>
                            <Button basic color="red">
                                Ignore
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
