import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Icon, Form, Input, TextArea } from 'semantic-ui-react';

import { saveProject } from '../actions';

class EditProject extends Component {
    // TODO: use defaultValue from redux store current project
    render() {
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
                <div>
                    <Button
                        primary
                        animated
                        as={Link}
                        to="/myportfolio"
                        onClick={() => console.log('add clicked')}
                    >
                        <Button.Content visible>Add</Button.Content>
                        <Button.Content hidden>
                            <Icon name="check" />
                        </Button.Content>
                    </Button>
                    <Button secondary animated as={Link} to="/myportfolio">
                        <Button.Content visible>Cancel</Button.Content>
                        <Button.Content hidden>
                            <Icon name="cancel" />
                        </Button.Content>
                    </Button>
                </div>
            </Form>
            // TODO: add saveProject action callback
        );
    }
}

export default connect(null, { saveProject })(EditProject);
