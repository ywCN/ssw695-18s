import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';

import { addContact } from '../actions';
import Landing from './Landing';

class CoderModal extends Component {
    render() {
        const content = this.props.user ? (
            <Modal
                trigger={
                    <Button basic color="green">
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

                        {_.times(50, i => (
                            <div style={{ paddingBottom: 5 }}>
                                testtesttesttesttesttesttest
                            </div>
                        ))}
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button primary>
                        Proceed <Icon name="right chevron" />
                    </Button>
                </Modal.Actions>
            </Modal>
        ) : (
            <Landing />
        );

        return content;
    }
}

const mapStateToProps = ({ currentCoderPortfolio, user }) => {
    return { currentCoderPortfolio, user };
};

export default connect(mapStateToProps, { addContact })(CoderModal);
